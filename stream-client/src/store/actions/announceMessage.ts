import { Action } from "../action";
import ChatMessage from "../../models/ChatMessage";

export const NEW_ANNOUNCEMENT = "NEW_ANNOUNCEMENT";

export type NewAnnouncementAction = Action<
  typeof NEW_ANNOUNCEMENT,
  ChatMessage
>;

export const NewAnnouncementMessage = (
  message: ChatMessage | undefined
): NewAnnouncementAction => ({
  type: NEW_ANNOUNCEMENT,
  payload: message,
});
