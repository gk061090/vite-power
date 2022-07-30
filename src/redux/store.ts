import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counterSlice";
import { appListenerMiddleware } from "./listeners/appListener";
import { api } from "./queries/api";

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(appListenerMiddleware.middleware)
      .concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
