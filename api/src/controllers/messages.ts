import { Request, Response } from "express";
import MessageServices from "../services/messages";
import Message from "../models/Message";

export const createMessageController = async (req: Request, res: Response) => {
  try {
    const newMessage = new Message({
      "text": req.body.text,
      "userId": req.body.userId,
      "roomId": req.body.roomId
    });

    const message = await MessageServices.createMessage(newMessage);

    res.json(message);
  } catch (error) {
    console.log(error);
  }
};

export const getMessagesByRoomIdController = async (req: Request, res: Response) => {
    try {
        const roomId = req.params.id;
        const messages = await MessageServices.getMessagesByRoomId(roomId);
        res.json(messages)
    } catch(error) {
        console.log(error);
    }
}