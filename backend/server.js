import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config';



import sendMessageRouter from './routes/sendMessage.js';
import workRouter from './routes/workRoutes.js';
import connectCloudinary from './config/cloudinary.js';


const allowedOrigins=['http://localhost:5173']











//app config
const app = express()
const port = process.env.PORT || 4000

//middlewares
app.use(express.json())
app.use(cors({origin:allowedOrigins,credentials:true}))
app.use(express.urlencoded({ extended: true }));

connectCloudinary();

//api endpoints
app.use('/contact',sendMessageRouter);

app.use("/api/works",workRouter);

app.get('/',(req,res)=>{res.json("api working")})


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log(err));


app.listen(port,()=>console.log('server started',port))