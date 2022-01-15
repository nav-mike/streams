import ChatMessage from "../../models/ChatMessage";
import { NewAnnouncementAction } from "../actions/announceMessage";

export type State = {
  message?: ChatMessage;
};

export const initialState: State = {
  message: undefined,
};

const announceMessageReducer = (
  state: State = initialState,
  action: NewAnnouncementAction
) => {
  switch (action.type) {
    case "NEW_ANNOUNCEMENT":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default announceMessageReducer;
