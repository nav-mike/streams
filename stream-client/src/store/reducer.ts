import { combineReducers, createStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
