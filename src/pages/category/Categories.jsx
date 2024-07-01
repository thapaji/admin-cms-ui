import { Button } from "react-bootstrap";
import React from "react";
import { CategoryTable } from "../../components/tables/CategoryTable";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../store/systemSlice";
import { CustomModal } from "../../components/common/custom-modal/CustomModal";
import { AddNewCategory } from "../../components/forms/AddNewCategory";
import { useModal } from "../../Hooks/useModal";

const Categories = () => {
  const { showModal, setShowModal } = useModal();
  const { categories } = useSelector((state) => state.catInfo);
  const dispatch = useDispatch();

  return (
    <>
      <div>Categories</div>
      <hr />
      <div className="text-end">
        <Button
          className="btn-primary"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add
        </Button>
      </div>
      <div>{categories.length} categories found</div>
      <div>
        <CategoryTable />
      </div>
      <CustomModal showModal={showModal} setShowModal={setShowModal} title={"Add New Category"}>
        <AddNewCategory />
      </CustomModal>
    </>
  );
};

export default Categories;
