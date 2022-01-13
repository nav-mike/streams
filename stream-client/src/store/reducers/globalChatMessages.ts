import ChatMessage from "../../models/ChatMessage";
import { DateTime } from "luxon";
import { NEW_MESSAGE, NewMessageAction } from "../actions/globalChatMessages";

export type State = {
  messages: ChatMessage[];
};

export const initialState = {
  messages: [],
};

const globalChatMessagesReducer = (
  state: State = initialState,
  action: NewMessageAction
) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [action.payload, ...state.messages].slice(0, 1000),
      };
    default:
      return state;
  }
};

export default globalChatMessagesReducer;
