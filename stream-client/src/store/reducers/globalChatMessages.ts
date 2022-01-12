import ChatMessage from "../../models/ChatMessage";
import { DateTime } from "luxon";
import { NEW_MESSAGE, NewMessageAction } from "../actions/globalChatMessages";

export type State = {
  messages: ChatMessage[];
};

export const initialState = {
  messages: [
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
    },
    {
      author: "Kent Dodds",
      authorAvatar: "https://bit.ly/kent-c-dodds",
      message:
        "programming the firewall won't do anything, we need to index the primary PCI panel!",
      createdAt: DateTime.now().plus({ minutes: -1 }),
    },
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
    },
    {
      author: "Kent Dodds",
      authorAvatar: "https://bit.ly/kent-c-dodds",
      message:
        "programming the firewall won't do anything, we need to index the primary PCI panel!",
      createdAt: DateTime.now().plus({ minutes: -1 }),
    },
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
    },
    {
      author: "Kent Dodds",
      authorAvatar: "https://bit.ly/kent-c-dodds",
      message:
        "programming the firewall won't do anything, we need to index the primary PCI panel!",
      createdAt: DateTime.now().plus({ minutes: -1 }),
    },
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
    },
    {
      author: "Kent Dodds",
      authorAvatar: "https://bit.ly/kent-c-dodds",
      message:
        "programming the firewall won't do anything, we need to index the primary PCI panel!",
      createdAt: DateTime.now().plus({ minutes: -1 }),
    },
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
    },
    {
      author: "Kent Dodds",
      authorAvatar: "https://bit.ly/kent-c-dodds",
      message:
        "programming the firewall won't do anything, we need to index the primary PCI panel!",
      createdAt: DateTime.now().plus({ minutes: -1 }),
    },
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
    },
    {
      author: "Kent Dodds",
      authorAvatar: "https://bit.ly/kent-c-dodds",
      message:
        "programming the firewall won't do anything, we need to index the primary PCI panel!",
      createdAt: DateTime.now().plus({ minutes: -1 }),
    },
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
    },
    {
      author: "Kent Dodds",
      authorAvatar: "https://bit.ly/kent-c-dodds",
      message:
        "programming the firewall won't do anything, we need to index the primary PCI panel!",
      createdAt: DateTime.now().plus({ minutes: -1 }),
      authorStatus: "moderator",
    },
    {
      author: "Jaxson Bator",
      authorAvatar: "https://bit.ly/code-beast",
      message:
        "If we bypass the program, we can get to the SSL system through the neural SQL bandwidth!",
      createdAt: DateTime.now().plus({ minutes: -2 }),
      authorStatus: "admin",
    },
  ],
};

const globalChatMessagesReducer = (
  state: State = initialState,
  action: NewMessageAction
) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
};

export default globalChatMessagesReducer;
