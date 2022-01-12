import { combineReducers, createStore } from "@reduxjs/toolkit";
import streamsReducer from "./reducers/streams";
import globalChatMessagesReducer from "./reducers/globalChatMessages";

export const rootReducer = combineReducers({
  streams: streamsReducer,
  globalChatMessages: globalChatMessagesReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
