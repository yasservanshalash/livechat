import { Router } from "express";
import {
  createMessageController,
  getMessagesByRoomIdController,
} from "../controllers/messages";

const router = Router();

router.post("/", createMessageController);
router.get("/rooms/:roomId", getMessagesByRoomIdController);

export default router;
