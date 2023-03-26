// room services here - logic to communicate with database

import { RoomDocument } from "../models/Room";
import Room from "../models/Room";

const createRoom = async (room: RoomDocument): Promise<RoomDocument> => {
return room.save();
};

const getRooms = async (): Promise<RoomDocument[]> => {
return Room.find();
};

const getRoomById = async (id: string): Promise<RoomDocument | null> => {
return Room.findById(id);
};

const updateRoom = async (
id: string,
newData: RoomDocument
): Promise<RoomDocument | null> => {
return Room.findByIdAndUpdate(id, newData, { new: true });
};

const deleteRoom = async (id: string): Promise<RoomDocument | null> => {
return Room.findByIdAndDelete(id);
};

export default {
createRoom,
getRooms,
getRoomById,
updateRoom,
deleteRoom,
};