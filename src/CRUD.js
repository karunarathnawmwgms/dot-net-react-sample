import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const CRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[ name, setName]=useState ('')
  const[ age, setAge]=useState ('')
  const[ isActive, setIsActive]=useState ('')

  const [editId,setEditId]=useState ('')
  const [editName,setEditeName]=useState ('')
  const [editAge,setEditAge]=useState ('')
  const [edittIsAction,setEditIsAction]=useState ('')

  const empdata = [
    {
      id: 1,
      name: "manoj",
      age: 29,
      isActive: 1,
    },
    {
      id: 2,
      name: "virat",
      age: 30,
      isActive: 1,
    },
    {
      id: 3,
      name: "rohit",
      age: 34,
      isActive: 0,
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(empdata);
  }, []);

  const handleEdit = (id) => {
    //alert (id);
    handleShow();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this employee") == true)
      alert(id);
  };
  const handleUpdate = (id) => {
    if (window.confirm("Are you to delete this employee") == true) {
      alert(id);
    }
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </Col>

          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
            />
          </Col>
          <Col>
            <input type="checkbox" />
            <label>IsActive</label>
          </Col>
          <Col>
            <Button className=" btn btn-primary">submit</Button>
          </Col>
        </Row>
        <br></br>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th> Name</th>
            <th>Age</th>
            <th>IsActive</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.isActive}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Lording..."}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal / Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </Col>

            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Age"
              />
            </Col>
            <Col>
              <input type="checkbox" />
              <label>IsActive</label>
            </Col>
            
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CRUD;
