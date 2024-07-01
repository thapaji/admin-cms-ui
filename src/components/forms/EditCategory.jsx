import React, { useEffect } from "react";
import useForm from "../../Hooks/useForm";
import { useDispatch } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import { updateCategoryAction } from "../../features/categories/catAction";
import { toast } from "react-toastify";

export const EditCategory = ({ selectedCategory, setShowModal }) => {
  const { form, setForm, handleChange } = useForm({});

  useEffect(() => {
    setForm({ ...selectedCategory });
  }, []);

  const dispatch = useDispatch();
  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      placeholder: "Enter Title of Category",
      value: form.title,
    },
    { label: "Slug", name: "slug", type: "text", disabled: true, value: form.slug },
    {
      label: "Status",
      name: "status",
      type: "select",
      value: form.status,
      options: [
        { label: "-- Select --", value: "" },
        { label: "Active", value: "active", selected: form.status === "active" },
        { label: "Inactive", value: "inactive", selected: form.status === "inactive" },
      ],
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title) {
      return alert("Please enter category");
    }

    const status = await dispatch(updateCategoryAction(form));
    if (status === "success") {
      toast.success("Success");
      setShowModal(false);
    }
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
