import { Button } from "react-bootstrap";
import React from "react";
import { CategoryTable } from "../../components/tables/CategoryTable";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../store/systemSlice";

const Categories = () => {
  const { showModal } = useSelector((state) => state.system);
  const dispatch = useDispatch();

  return (
    <>
      <div>Categories</div>
      <hr />
      <div className="text-end">
        <Button
          className="btn-primary"
          onClick={() => {
            dispatch(setShowModal(true));
          }}
        >
          Add
        </Button>
      </div>
      <div>5 categories found</div>
      <div>
        <CategoryTable />
      </div>
    </>
  );
};

export default Categories;
