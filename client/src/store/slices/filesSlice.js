import { createSlice } from "@reduxjs/toolkit";

export const counterReducers = {
  setTableData: (state, action) => {
    state.tableData = action.payload;
    state.isLoadingTableData = false;
  },
  setFileList: (state, action) => {
    state.fileList = action.payload;
    state.isLoadingFileList = false;
  },
  setIsLoadingTableData: (state, action) => {
    state.isLoadingTableData = action.payload;
  },
  setIsLoadingFileList: (state, action) => {
    state.isLoadingFileList = action.payload;
  },
};

export const counterSlice = createSlice({
  name: "files",
  initialState: {
    tableData: [],
    isLoadingTableData: true,
    fileList: { files: [] },
    isLoadingFileList: true,
  },
  reducers: counterReducers,
});

// Action creators are generated for each case reducer function
export const {
  setTableData,
  setFileList,
  setIsLoadingTableData,
  setIsLoadingFileList,
} = counterSlice.actions;

export default counterSlice.reducer;
