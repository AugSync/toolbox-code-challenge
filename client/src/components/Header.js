import React from "react";
import { Container, Navbar, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = ({ handleFilter }) => {
  const { fileList, isLoadingFileList } = useSelector(({ files }) => files);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>React Test App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Form.Group className="d-flex align-items-center w-25">
            <Form.Label className="w-50">Filter by </Form.Label>

            <Form.Select
              onChange={(event) => handleFilter(event.target.value)}
              disabled={isLoadingFileList}
              defaultValue="select"
            >
              <option value="select" disabled>
                Select file name
              </option>
              {fileList &&
                fileList.files.map((file, index) => (
                  <option value={file} key={index}>
                    {file}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
