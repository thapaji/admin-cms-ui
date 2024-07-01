import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { CustomModal } from "../common/custom-modal/CustomModal";
import { AddNewCategory } from "../forms/AddNewCategory";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryAction } from "../../features/categories/catAction";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.catInfo);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);

  return (
    <>
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
          {categories.map(({_id,status,title,slug}, i) => {
            return (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td>{title}</td>
                <td>{status}</td>
                <td>{slug}</td>
                <td>
                  <Button variant="warning">Edit</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <CustomModal title={"Add New Category"}>
        <AddNewCategory />
      </CustomModal>
    </>
  );
};
