import express from "express";
import { addWork, allWorks, getWorkById } from "../controller/workController.js";
import upload from "../middlewares/multer.js";

const workRouter = express.Router();

// workRouter.get("/:id",getWorkById);
workRouter.get("/allWorks",allWorks);
workRouter.get("/:id",getWorkById);
workRouter.post("/add-work",
  upload.fields([
    {name:"image",maxCount:1},
    {name:"screenshots",maxCount:20}
  ]),
  addWork)

export default workRouter;