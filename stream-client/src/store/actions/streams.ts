import { Action } from "../action";
import Stream from "../../models/Stream";

export const GET_ALL_STREAMS = "GET_ALL_STREAMS";

export type GetAllStreamsAction = Action<typeof GET_ALL_STREAMS, Stream[]>;

export const getAllStreams = (streams: Stream[]): GetAllStreamsAction => ({
  type: GET_ALL_STREAMS,
  payload: streams,
});
