import cloudinary from "../config/cloudinary.js";
import Work from "../models/workModels.js";
import path from "path";


export const allWorks=async(req,res)=>{
  try {
    const works = await Work.find({})
    res.json({success:true,works})
    
  } catch (error) {
    res.json({success:false,message:error.message})
    
  }
}

export const getWorkById = async(req,res)=>{
  try {
    const work = await Work.findById(req.params.id);
    if(!work) return res.status(404).json({message:"project not found"});
    
    res.status(200).json({work});
    
  } catch (error) {
    res.status(500).json({message:error.message});
    
  }
};

export const addWork= async(req,res)=>{
  try {
    const {name,technology,shortDescription,longDescription} = req.body;

    const imageFile=req.files?.image?.[0];
    const screenshotsFiles=req.files?.screenshots||[];

    if(!name)  return res.json({success:false,message:"Missing Name"})
    if(!technology)  return res.json({success:false,message:"Missing technology"})
    if(!shortDescription)  return res.json({success:false,message:"Missing short description"})
    if(!longDescription)  return res.json({success:false,message:"Missing long description"})


   //upload image to cloudinary
   const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
   const imageUrl = imageUpload.secure_url

   // multiple screenshots upload
    const screenshotsUrls = [];

    for (const file of screenshotsFiles) {
      const upload = await cloudinary.uploader.upload(file.path, {
        resource_type: "image",
      });
      screenshotsUrls.push(upload.secure_url);
    }


   
    const workData={
        name,
        technology,
        shortDescription,
        longDescription:JSON.parse(longDescription),
        image:imageUrl,
        screenshots: screenshotsUrls, 

        date:Date.now(),
   
       }
   
       const newWork = new Work(workData)
       await newWork.save()
       res.json({success:true,message:'Work Added'})
   

    
  } catch (error) {
     res.status(400).json({ message: error.message });
    
  }
}