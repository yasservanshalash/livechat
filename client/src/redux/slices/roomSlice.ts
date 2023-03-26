import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Room } from "../../types/types";

type RoomsState = {
  rooms: Room[];
  selectedRoom: Room | null;
};

const initialState: RoomsState = {
  rooms: [],
  selectedRoom: null,
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    getAllRooms(state, action: PayloadAction<Room[]>) {
      state.rooms = action.payload;
    },
    selectRoom(state, action: PayloadAction<Room>) {
      state.selectedRoom = action.payload;
    },
    clearSelectedRoom(state) {
      state.selectedRoom = null;
    },
    addNewRoom(state, action: PayloadAction<Room>) {
      state.rooms.push(action.payload);
    },
  },
});

export const roomsActions = roomsSlice.actions;

export default roomsSlice.reducer;