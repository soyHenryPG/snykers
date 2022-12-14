import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Create from "../../../Create/Create";

export default function ModalFormCreate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="btnCard1" onClick={handleShow}>
        Add
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body className="d-flex">
          <Create />
        </Modal.Body>
      </Modal>
    </>
  );
}
