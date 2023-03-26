// services/Messages.ts
// Message services here - logic to communicate with database
import { MessageDocument } from "../models/Message";
import Message from "../models/Message";

const createMessage = async (
  message: MessageDocument
): Promise<MessageDocument> => {
  return message.save();
};

const getMessagesByRoomId = async (
  roomId: string
): Promise<MessageDocument[]> => {
  return Message.find({ roomId });
};

export default { createMessage, getMessagesByRoomId };