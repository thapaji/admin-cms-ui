import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import useForm from "../../Hooks/useForm";
import { useDispatch } from "react-redux";
import { createNewCategoryAction } from "../../features/categories/catAction";

export const AddNewCategory = () => {
  const inputs = [
    { label: "Title", name: "title", type: "text", placeholder: "Enter Title of Category" },
  ];
  const { form, setForm, handleChange } = useForm({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) {
      return alert("Please enter category");
    }
    dispatch(createNewCategoryAction(form));
  };

  return (
    <Form onSubmit={handleSubmit}>
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} onChange={handleChange} />
      ))}
      <Button type="submit">Submit</Button>
    </Form>
  );
};
