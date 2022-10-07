import React, { useEffect } from "react";
import { Header, Table } from "./components";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  setTableData,
  setFileList,
  setIsLoadingTableData,
} from "./store/slices/filesSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleFilter = async (fileName) => {
    dispatch(setIsLoadingTableData(true));
    try {
      const filesDataResponse = await fetch(
        `http://localhost:8080/files/data?fileName=${fileName}`
      );

      if (filesDataResponse.ok) {
        const tableData = await filesDataResponse.json();
        dispatch(setTableData([tableData]));
      } else {
        dispatch(setTableData([]));
      }
    } catch (error) {
      // error handling code
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filesDataResponse = await fetch(
          "http://localhost:8080/files/data"
        );
        const filesListResponse = await fetch(
          "http://localhost:8080/files/list"
        );
        if (filesDataResponse.ok) {
          const tableData = await filesDataResponse.json();
          dispatch(setTableData(tableData));
        }

        if (filesListResponse.ok) {
          const filesList = await filesListResponse.json();
          dispatch(setFileList(filesList));
        }
      } catch (error) {
        // error handling code
        console.error(error);
      }
    };

    // call the async fetchData function
    fetchData();
  }, []);

  return (
    <Container className="py-4">
      <Header handleFilter={handleFilter} />
      <Table />
    </Container>
  );
};

export default App;
