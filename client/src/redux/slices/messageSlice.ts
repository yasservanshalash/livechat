import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../../types/types";

interface MessageState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  isLoading: false,
  error: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const messageActions = messageSlice.actions;

export default messageSlice.reducer;
