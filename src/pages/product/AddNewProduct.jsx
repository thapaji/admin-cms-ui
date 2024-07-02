import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NewProduct } from "../../components/forms/NewProduct";

const AddNewProduct = () => {
  const navigate = useNavigate();
  
  const handleBackButtonClick = () => {
    navigate("/admin/product");
  };

  return (
    <>
      <Row>
        <Col>
          <h4>New Product</h4>
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
      <div>
        <NewProduct />
      </div>
    </>
  );
};

export default AddNewProduct;
