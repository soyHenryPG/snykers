import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProducts,
  getAllProducts,
} from "../../../../redux/features/products/productsActions";
import "../../../../styles/modalProductsWarning.css";
import { deleteReviewProduct } from "../../../../redux/features/reviews/reviewsActions";

const ModalProductWarning = (props) => {
  const { filters, orders } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const handlerOnClick = () => {
    // console.log(props)
    dispatch(deleteProducts(props.show));
    props.onHide();
    dispatch(getAllProducts());
    // console.log(props.reviews)
    if(props.reviews.length) dispatch(deleteReviewProduct(props.show, props.reviews))
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="d-flex justify-content-center asjdnasidjniasud"
    >
      <Modal.Header className="header d-flex">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="d-flex justify-content-center w-100"
        >
          <h3>Are you sure?</h3>
        </Modal.Title>
      </Modal.Header>

      <div className="d-flex ">
        <Modal.Body className="d-flex">
          <Button className="bg-success me-5" onClick={() => props.onHide()}>
            Cancel
          </Button>
          <Button className="bg-danger" onClick={() => handlerOnClick()}>
            Delete
          </Button>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ModalProductWarning;
