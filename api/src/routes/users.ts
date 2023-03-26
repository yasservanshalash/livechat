import { Router } from "express";
import {
  createUserController,
  loginController,
  getUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/users";

const router = Router();

router.post("/", createUserController);
router.post("/login", loginController);
router.get("/:id", getUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
