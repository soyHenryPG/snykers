import React, { useState } from "react";
import CardsContainer from "../../CardsContainer/CardsContainer";
//JSX
import MiddleViewCard from "./MiddleViewCard";
//BS
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PreviewModal = (props) => {
  let lastProduct = JSON.parse(localStorage.getItem("carrito")).at(-1);

  console.log("preview Modal", lastProduct);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            You added products to the cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MiddleViewCard product={lastProduct} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const Preview = ({ product, setProduct }) => {
  console.log("preview", product);
  const [modalShow, setModalShow] = useState(false);
  const [previewProduct, setPreviewProduct] = useState({});

  const handleAddToCart = (e) => {
    setModalShow(true);
    setProduct(e);
    setPreviewProduct(product);
  };

  console.log(previewProduct);
  return (
    <>
      <Button variant="primary" onClick={(e) => handleAddToCart(e)}>
        Add to cart
      </Button>

      <PreviewModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Preview;
