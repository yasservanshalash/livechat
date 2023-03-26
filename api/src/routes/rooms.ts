import { Router } from "express";
import {
  createRoomController,
  getRoomsController,
  getRoomByIdController,
  updateRoomController,
  deleteRoomController,
} from "../controllers/rooms";

const router = Router();

router.get("/", getRoomsController);
router.post("/", createRoomController);
router.get("/:id", getRoomByIdController);
router.put("/:id", updateRoomController);
router.delete("/:id", deleteRoomController);

export default router;
