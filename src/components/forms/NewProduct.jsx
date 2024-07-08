import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomInput } from "../common/custom-input/CustomInput";
import { Button, Form } from "react-bootstrap";
import useForm from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { createNewProductAction } from "../../features/products/productAction";
import { getCategoryAction } from "../../features/categories/catAction";

export const NewProduct = () => {
  const { categories } = useSelector((state) => state.catInfo);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategoryAction());
    }
  }, [dispatch, categories.length]);

  useEffect(() => {
    setOptions(categories.map((category) => ({ value: category.title, label: category.title })));
  }, [categories]);

  const inputs = [
    {
      label: "Product Name",
      name: "name",
      type: "text",
      placeholder: "Enter Product Name",
      required: true,
      //   requiredMessage: "Product Name is required",
    },
    {
      label: "Product Category",
      name: "category",
      type: "select",
      placeholder: "Select Product Category",
      required: true,
      options: [{ value: "", label: "Select Product Category" }, ...options],
    },
    {
      label: "Product SKU",
      name: "sku",
      type: "text",
      placeholder: "Enter Product SKU",
      required: true,
    },
    {
      label: "Product Price",
      name: "price",
      type: "number",
      placeholder: "Enter Product Price",
      required: true,
    },
    {
      label: "Product stock",
      name: "stock",
      type: "number",
      placeholder: "Enter Product Quantity",
      required: true,
    },
    {
      label: "Procudt Sale Price",
      name: "salePrice",
      type: "number",
      placeholder: "Enter Product Sale Price",
    },
    {
      label: "Product Sale Start",
      name: "saleStart",
      type: "date",
      placeholder: "Enter Product Sale Start Date",
    },
    {
      label: "Product Sale End",
      name: "saleEnd",
      type: "date",
      placeholder: "Enter Product Sale End Date",
    },
    {
      label: "Product Description",
      name: "description",
      type: "text",
      placeholder: "Enter Product Description",
      required: true,
    },
    {
      label: "Images",
      name: "images",
      type: "file",
      placeholder: "Enter Images",
      required: true,
      accept: "image/*",
    },
  ];
  const { images, form, setForm, handleChange } = useForm({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = new FormData();
    for (let key in form) {
      data.append(key, form[key]);
    }
    console.log(images, typeof images);
    if (images.length > 0) {
      images.forEach((image) => data.append("images", image));
    }

    const status = await dispatch(createNewProductAction(data));
    status === "success" && navigate("/admin/product");
  };

  return (
    <Form onSubmit={handleSubmit} className="me-4">
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} onChange={handleChange} />
      ))}
      <Button type="submit">Submit</Button>
    </Form>
  );
};
