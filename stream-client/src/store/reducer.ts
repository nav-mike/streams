import { combineReducers, createStore } from "@reduxjs/toolkit";
import streamsReducer from "./reducers/streams";

export const rootReducer = combineReducers({
  streams: streamsReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
