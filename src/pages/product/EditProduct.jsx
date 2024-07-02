import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { EditProductForm } from "../../components/forms/EditProductForm";

const EditProduct = () => {
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate("/admin/product");
  };
  return (
    <>
      <Row>
        <Col>
          <h4>Edit Product</h4>
        </Col>
        <Col>
          {" "}
          <div className="text-end">
            <Button className="btn-primary me-4" onClick={handleBackButtonClick}>
              Back
            </Button>
          </div>
        </Col>
      </Row>

      <hr />
      <div><EditProductForm /></div>
    </>
  );
};

export default EditProduct;
