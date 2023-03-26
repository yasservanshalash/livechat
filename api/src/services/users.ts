// user services here - logic to communicate with database

import { UserDocument } from "../models/User";
import User from "../models/User";

const createUser = async (user: UserDocument): Promise<UserDocument> => {
return user.save();
};

const getUsers = async (): Promise<UserDocument[]> => {
return User.find();
};

const getUserById = async (id: string): Promise<UserDocument | null> => {
return User.findById(id);
};

const getUserByEmail = async (email: string): Promise<UserDocument | null> => {
return User.findOne({ email });
};

const updateUser = async (
id: string,
newData: UserDocument
): Promise<UserDocument | null> => {
return User.findByIdAndUpdate(id, newData, { new: true });
};

export default {
createUser,
getUsers,
getUserById,
getUserByEmail,
updateUser,
};