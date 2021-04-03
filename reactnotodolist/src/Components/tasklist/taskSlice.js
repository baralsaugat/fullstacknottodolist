import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalHrs: 0,
  taskLists: [],
  notToDoList: [],
  itemToDelete: [],

  isPending: false,
  status: "",
  message: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isPending = true;
    },
    addTaskSuccess: (state, action) => {
      state.isPending = false;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    fetchTaskSuccess: (state, { payload = [] }) => {
      state.isPending = false;
      state.totalHrs = payload.reduce((subTotal, row) => subTotal + +row.hr, 0);
      state.taskLists = payload.filter((row) => row.todo);
      state.notToDoList = payload.filter((row) => !row.todo);
    },

    updateTaskSuccess: (state, { payload }) => {
      state.isPending = false;
      state.status = payload.status;
      state.message = payload.message;
    },
    deleteTaskSuccess: (state, { payload }) => {
      state.isPending = false;
      state.status = payload.status;
      state.message = payload.message;
      if (payload.status === "success") state.itemToDelete = [];
    },

    setItemToDelete: (state, { payload }) => {
      const { checked, value } = payload;

      if (checked) {
        state.itemToDelete = [...state.itemToDelete, value];
      } else {
        const newlist = state.itemToDelete.filter((item) => item !== value);
        state.itemToDelete = newlist;
      }
    },

    requestFail: (state, { payload }) => {
      state.isPending = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = taskSlice;

export const {
  requestPending,
  addTaskSuccess,
  requestFail,
  fetchTaskSuccess,
  updateTaskSuccess,
  setItemToDelete,
  deleteTaskSuccess,
} = actions;

export default reducer;
