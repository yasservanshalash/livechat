import { Router } from "express";
import {
  createUserController,
  loginController,
  getUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/users";

import passport from "passport";

const router = Router();

router.post("/", createUserController);
router.post("/login", loginController);
router.get("/:id", getUserController);
router.put("/:id", passport.authenticate("jwt", { session: false }) ,updateUserController);
router.delete("/:id", deleteUserController);

export default router;
