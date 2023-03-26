// models/Message.ts
import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export type MessageDocument = Document & {
  content: string;
  roomId: string;
  sender: string;
};

const MessageSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<MessageDocument>("Message", MessageSchema);