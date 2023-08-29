import express from "express";
import {
  createRoom,
  getAllRooms,
} from "../controllers/roomsControllers.js";

const router = express.Router();

router
  .route("/")
  .get(getAllRooms)
  .post(createRoom);

export { router as roomsRouter };
