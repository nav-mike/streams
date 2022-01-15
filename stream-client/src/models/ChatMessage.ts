import { DateTime } from "luxon";

export default class ChatMessage {
  constructor(
    public author: string,
    public message: string,
    public createdAt: DateTime,
    public authorAvatar: string,
    public authorStatus?: string,
    public pinned?: boolean,
    public booked?: boolean
  ) {}
}

export interface IChatMessage {
  author: string;
  message: string;
  createdAt: string;
  authorAvatar: string;
  authorStatus?: string;
  pinned?: boolean;
  booked?: boolean;
}
