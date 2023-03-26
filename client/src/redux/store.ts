import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/slices/userSlice"
import roomReducer from "../redux/slices/roomSlice"
import messageReducer from "../redux/slices/messageSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        room: roomReducer,
        message: messageReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
