import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
// import custom hook
import { useForm } from "../hooks/useForm";
export default function AddTodoModal({ onTodoAddSubmit, show, hideModal }) {
  // destructure the custom hook and pass to it the initial value of the formValues and the onTodoAdd function which we get through the props
  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      text: "",
    },
    onTodoAddSubmit
  );

  return (
    <Modal show={show}>
      <Modal.Header closeButton onClick={hideModal}>
        <Modal.Title>Add todo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Do the dishes"
              name="text"
              value={formValues.text}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Container className="mt-1">
            <Row>
              <Col md={{ span: 6, offset: 8 }}>
                <Button variant="primary" type="submit" className="m-2">
                  Add
                </Button>
                <Button variant="info" onClick={hideModal}>
                  Close
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
