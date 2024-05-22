import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controller/foodControllers.js";

const foodRouter = express.Router();
//multer
const storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
