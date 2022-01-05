import Stream from "../../models/Stream";
import { GET_ALL_STREAMS, GetAllStreamsAction } from "../actions/streams";

export type State = {
  streams: Stream[];
};

export const initialState: State = {
  streams: [],
};

const streamsReducer = (
  state: State = initialState,
  action: GetAllStreamsAction
) => {
  switch (action.type) {
    case GET_ALL_STREAMS:
      return {
        ...state,
        streams: action.payload,
      };
    default:
      return state;
  }
};

export default streamsReducer;
