import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { deleteProductAction, getProductAction } from "../../features/products/productAction";
import { useNavigate } from "react-router-dom";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!products.length) {
      dispatch(getProductAction());
    }
  }, [dispatch, products.length]);

  const handleUpdateClick = (_id) => {
    navigate("/admin/product/edit/" + _id);
  };

  const handleDeleteClick = (_id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProductAction(_id));
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>SKU</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Sales </th>
          {/* <th>Images</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product._id}>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td>{product.sku}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>
              {product.salePrice && (
                <p>
                  ${product.salePrice}
                  <hr />
                  {product.saleStart?.slice(0, 10)} to {product.saleEnd?.slice(0, 10)}
                </p>
              )}
            </td>
            <td>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => {
                  handleUpdateClick(product._id);
                }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  handleDeleteClick(product._id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductTable;
