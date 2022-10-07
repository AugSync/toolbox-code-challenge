import React from "react";
import { Table, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const TableComponent = () => {
  const { tableData, isLoadingTableData } = useSelector(({ files }) => files);

  if (isLoadingTableData)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="grow" className="mt-5" />
      </div>
    );

  let tableBody = tableData
    .map((file) => file)
    .map(({ lines }) => lines)
    .flat();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableData.length > 0 && tableData[0].lines.length > 0 ? (
            Object.keys(tableData[0].lines[0]).map((header, index) => (
              <th className="text-capitalize" key={index}>
                {header}
              </th>
            ))
          ) : (
            <th>There are no lines to show</th>
          )}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((content, index) => (
          <tr key={index}>
            {Object.values(content).map((value, valueIndex) => (
              <td key={valueIndex}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
