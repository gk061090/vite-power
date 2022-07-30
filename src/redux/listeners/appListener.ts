import { createListenerMiddleware } from "@reduxjs/toolkit";
import { increment } from "../features/counterSlice";
import { api } from "../queries/api";

export const appListenerMiddleware = createListenerMiddleware();

appListenerMiddleware.startListening({
  actionCreator: increment,
  effect: async (action, listenerApi) => {
    console.log("Increased");

    // console.log(listenerApi.signal);
    // listenerApi.cancelActiveListeners();
    // console.log(listenerApi.signal);

    // const data = await fetch(
    //   "https://jsonplaceholder.typicode.com/posts/1?_delay=10000"
    // ).then((response) => response.json());

    // console.log(data);

    listenerApi.dispatch(
      api.endpoints.getPost.initiate({ id: 1 }, { forceRefetch: true })
    );
  },
});
