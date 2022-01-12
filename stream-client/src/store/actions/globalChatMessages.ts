import { Action } from "../action";
import ChatMessage from "../../models/ChatMessage";

export const NEW_MESSAGE = "NEW_MESSAGE";

export type NewMessageAction = Action<typeof NEW_MESSAGE, ChatMessage>;

export const NewGlobalMessage = (message: ChatMessage): NewMessageAction => ({
  type: NEW_MESSAGE,
  payload: message,
});
