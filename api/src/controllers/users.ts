// logic to deal with request and response here
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserServices from "../services/users";
import User, { UserDocument } from "../models/User";

const saltRounds = 10;

export const createUserController = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      "username": req.body.username,
      "email": req.body.email,
      "password": hashedPassword,
    });

    const user = await UserServices.createUser(newUser);

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      res.status(401).json({ error: "Invalid email or password" });
      return;
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!);

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};

export const getUserController = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, newData, { new: true });
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};