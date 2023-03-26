// models/Room.ts
import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export type RoomDocument = Document & {
  name: string;
  createdBy: string;
  users: string[];
};

const RoomSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<RoomDocument>("Room", RoomSchema);