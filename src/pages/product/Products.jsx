import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProductTable } from "../../components/tables/ProductTable";

const Products = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/admin/product/new");
  };

  return (
    <>
      <Row>
        <Col>
          <h4>Products</h4>
        </Col>
        <Col>
          {" "}
          <div className="text-end">
            <Button className="btn-primary me-4" onClick={handleAddProduct}>
              Add
            </Button>
          </div>
        </Col>
      </Row>

      <hr />
      <div>6 products found</div>
      <div>
        <ProductTable />
      </div>
    </>
  );
};

export default Products;
