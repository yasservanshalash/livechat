// models/User.ts
import mongoose, { Document } from "mongoose";

const { Schema } = mongoose;

export type UserDocument = Document & {
  username: string;
  password: string;
  email: string;
};

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<UserDocument>("User", UserSchema);