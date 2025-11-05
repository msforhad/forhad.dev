import { useContext, useState } from "react";
import  upload_area  from "../assets/image/upload_area.svg";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import axios from "axios";

export default function AddWork() {
  const {backendUrl}=useContext(AppContext)

   
  const [name,setName]=useState('')
  const [technology, setTechnology] = useState("");
  const [shortDescription, setShortDescription] = useState("");

  const [longDescription, setLongDescription] = useState({
    description: "",
    Built_BY_Experts: "",
    Built_with: "",
    Javascript: "",
    Easy_To_Customize: "",
    Key_board_Accessible: "",
    Production_Ready: "",
    Simple_To_Deploy: "",
  });
  
  const [coverImage, setCoverImage] = useState(false);

  const [screenshotImage, setScreenshotImage] = useState({
    1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null
  });

  

  const longDescriptionChangeHandler=(e)=>{
    setLongDescription({...longDescription,[e.target.name]:e.target.value})

  }


  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("technology",technology.split(",").map((t) => t.trim()));
      formData.append("shortDescription", shortDescription);
      formData.append("longDescription",JSON.stringify(longDescription));
      formData.append("image", coverImage);

      Object.keys(screenshotImage).forEach((key) => {
        if (screenshotImage[key]) {
          formData.append("screenshots", screenshotImage[key]);
          
        }
      });
      
      const { data } = await axios.post(`${backendUrl}/api/works/add-work`,formData);

      if(data.success){
        toast.success(data.message);
        setName("");
        setTechnology("");
        setShortDescription('');

        setLongDescription({
          description: "",
          Built_BY_Experts: "",
          Built_with: "",
          Javascript: "",
          Easy_To_Customize: "",
          Key_board_Accessible: "",
          Production_Ready: "",
          Simple_To_Deploy: "",
        });

        setScreenshotImage({
          1: null,
          2: null,
          3: null,
          4: null,
          5: null,
          6: null,
          7: null,
          8: null,
          9: null,
          10: null,
        });
        setCoverImage(false);
      }else{
        toast.error(data.message)
      }


    } catch (error) {
      toast.error(error.message)
      
    }
  }

  const longDescriptionTitle=[
    "description",
    "Built_BY_Experts",
    "Built_with",
    "Javascript",
    "Easy_To_Customize",
    "Key_board_Accessible",
    "Production_Ready",
    "Simple_To_Deploy",
  ]



  return (
    <div className="bg-primary">
      <div className="p-8 flex py-10 justify-center mx-2 md:mx-30 2xl:mx-40">
        <form
          onSubmit={onSubmitHandler}
          className="bg-secondary shadow rounded p-8 w-full"
        >
          <h2 className="text-2xl font-bold pb-10 text-center poppins color-primary">
            🧩 Add New Work
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                name="name"
                placeholder="Project Name"
                className="bg-primary color-primary w-1/3 border-gray-400 border p-3 rounded outline-sky-200 text-base"
                required
              />

              <input
                onChange={(e) => setTechnology(e.target.value)}
                value={technology}
                type="text"
                name="technology"
                placeholder="Technologies (comma separated)"
                className="color-secondary bg-primary w-2/3 border p-3 rounded border-gray-400 outline-sky-200 text-base"
                required
              />
            </div>

            <textarea
              onChange={(e) => setShortDescription(e.target.value)}
              value={shortDescription}
              name="shortDescription"
              placeholder="Short Description"
              className="bg-primary color-primary w-full border border-gray-400 outline-sky-200 p-3 rounded text-base"
              required
            />

            <div className="flex flex-col gap-20 items-start py-10 px-10">
              <div className="flex flex-col gap-5 text-gray-500">
                <p className="text-base font-semibold poppins color-primary">
                  Upload CoverPicture
                </p>
                <div className="pl-5">
                  <label htmlFor="cover-img">
                    <img
                      className="w-50 h-30 object-cover bg-secondary rounded cursor-pointer shadow"
                      src={
                        coverImage
                          ? URL.createObjectURL(coverImage)
                          : upload_area
                      }
                      alt=""
                    />
                  </label>
                  <input
                    onChange={(e) => setCoverImage(e.target.files[0])}
                    className="hidden"
                    type="file"
                    id="cover-img"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 text-gray-500">
                <p className="text-base font-semibold poppins">
                  Upload Screenshot
                </p>
                <div className="flex gap-5 space-y-5 flex-wrap">
                  {Object.keys(screenshotImage).map((key) => (
                    <div className="pl-5" key={key}>
                      <label htmlFor={`screenImg${key}`}>
                        <img
                          className="w-50 h-30 object-cover bg-gray-100 rounded cursor-pointer shadow"
                          src={
                            screenshotImage[key]
                              ? URL.createObjectURL(screenshotImage[key])
                              : upload_area
                          }
                          alt=""
                        />
                      </label>
                      <input
                        onChange={(e) =>
                          setScreenshotImage({
                            ...screenshotImage,
                            [key]: e.target.files[0],
                          })
                        }
                        className="hidden"
                        type="file"
                        id={`screenImg${key}`}
                        multiple
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Long Description */}
          <h3 className="text-lg font-semibold mt-8 mb-3 text-gray-700 color-primary">
            📜 Long Description Details
          </h3>
          <div className="flex flex-col gap-5">
            {longDescriptionTitle.map((title, index) => (
              <textarea
                key={index}
                onChange={longDescriptionChangeHandler}
                name={title}
                value={longDescription[title]}
                placeholder={title}
                className="color-primary bg-primary w-full border border-gray-400 outline-sky-200 p-1.5 text-xs rounded"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className="cursor-pointer mt-8 w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit Work 🚀
          </button>
        </form>
      </div>
    </div>
  );
}
