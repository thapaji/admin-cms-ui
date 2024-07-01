import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { CustomModal } from "../common/custom-modal/CustomModal";
import { AddNewCategory } from "../forms/AddNewCategory";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryAction, getCategoryAction } from "../../features/categories/catAction";
import { EditCategory } from "../forms/EditCategory";
import { useModal } from "../../Hooks/useModal";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.catInfo);
  const [selectedCategory, setSelectedCategory] = useState({});
  const { showModal, setShowModal } = useModal();

  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);

  const handleClick = (_id, status, title, slug) => {
    setSelectedCategory(_id, status, title, slug);
    setShowModal(true);
  };

  const handleDeleteClick = (_id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategoryAction(_id));
    }
  };

  return (
    <>
      <CustomModal showModal={showModal} setShowModal={setShowModal} title={"Edit Category"}>
        <EditCategory
          selectedCategory={selectedCategory}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </CustomModal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Slug</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ _id, status, title, slug }, i) => {
            return (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>{title}</td>
                <td>{status}</td>
                <td>{slug}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleClick({ _id, status, title, slug })}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDeleteClick(_id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
