import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./Components/tasklist/taskSlice";

const store = configureStore({
  reducer: {
    // list all our store reducers

    task: taskReducer,
  },
});

export default store;
