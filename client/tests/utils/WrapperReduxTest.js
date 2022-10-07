import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { counterReducers } from "../../src/store/slices/filesSlice";

const WrapperReduxTest = ({ children, initialState }) => {
  const counterSlice = createSlice({
    name: "files",
    initialState: {
      tableData: [],
      isLoadingTableData: true,
      fileList: { files: [] },
      isLoadingFileList: true,
      ...initialState,
    },
    reducers: counterReducers,
  });

  return (
    <Provider
      store={configureStore({
        reducer: {
          files: counterSlice.reducer,
        },
      })}
    >
      {children}
    </Provider>
  );
};

export default WrapperReduxTest;
