import mongoose, { Types } from "mongoose";
 const workSchema = new mongoose.Schema({
  name:{type:String,required:true},
  technology:{type:[String],required:true},
  shortDescription:{type:String,required:true},
  longDescription:[
    {
      description:String,
      Built_BY_Experts:String,
      Built_with:String,
      Javascript:String,
      Easy_To_Customize:String,
      Key_board_Accessible:String,
      Production_Ready:String,
      Simple_To_Deploy:String,
    }
  ],
  image:{type:String,},
  screenshots:{type:[String],default:[]}
 },{timestamps:true});


 const Work = mongoose.model("Work",workSchema);
 export default Work;