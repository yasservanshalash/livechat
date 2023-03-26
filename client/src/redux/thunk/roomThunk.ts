import { Room } from "../../types/types";
import { AppDispatch } from "../store";
import axios from "axios";
import { roomsActions } from "../slices/roomSlice";

const url = `localhost:8000/rooms`;

export function fetchRoomsData() {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get<Room[]>(url);
    dispatch(roomsActions.getAllRooms(response.data));
  };
}