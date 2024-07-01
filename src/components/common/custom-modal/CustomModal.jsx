import React from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../store/systemSlice";

export const CustomModal = ({ title, children, ...rest }) => {
  const { showModal } = useSelector((state) => state.system);
  const dispatch = useDispatch();

  return (
    <Modal
      show={showModal}
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={() => dispatch(setShowModal(false))}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
