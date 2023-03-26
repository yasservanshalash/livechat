import { messageActions } from './../slices/messageSlice';
import { AppDispatch } from "../store";
import { Message } from "../../types/types";
import axios from "axios";

const url = "http://localhost:8000/message";

export const addMessageThunk = (message: Message) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(messageActions.setLoading(true));
      const response = await axios.post(url, message);
      dispatch(messageActions.addMessage(response.data));
      dispatch(messageActions.setLoading(false));
    } catch (error: any) {
      dispatch(messageActions.setError(error.message));
      dispatch(messageActions.setLoading(false));
    }
  };
};
