import { Request, Response } from "express";
import RoomServices from "../services/rooms";
import Room from "../models/Room";

export const createRoomController = async (req: Request, res: Response) => {
  try {
    const { name, createdBy } = req.body;
    const newRoom = new Room({ name, createdBy });
    const room = await RoomServices.createRoom(newRoom);
    res.json(room);
  } catch (error) {
    console.log(error);
  }
};


export const getRoomsController = async (req: Request, res: Response) => {
    try {
      const rooms = await RoomServices.getRooms();
      res.json(rooms);
    } catch (error) {
      console.log(error);
    }
  };

export const getRoomByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const room = await RoomServices.getRoomById(id);
    res.json(room);
  } catch (error) {
    console.log(error);
  }
};

export const updateRoomController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const room = await RoomServices.updateRoom(id, newData);
    res.json(room);
  } catch (error) {
    console.log(error);
  }
};

export const deleteRoomController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const room = await RoomServices.deleteRoom(id);
    res.json(room);
  } catch (error) {
    console.log(error);
  }
};