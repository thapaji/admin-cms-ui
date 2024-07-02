import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../Hooks/useForm";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import { getCategoryAction } from "../../features/categories/catAction";
import { getSingleProductAction, updateProductAction } from "../../features/products/productAction";

export const EditProductForm = () => {
  const { _id } = useParams();
  const { categories } = useSelector((state) => state.catInfo);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([]);
  // const [product, setProduct] = useState({});
  const { form, setForm, handleChange } = useForm({});
  const navigate = useNavigate();

  useEffect(() => {
    setFormData();
  }, []);

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategoryAction());
    }
  }, [dispatch, categories.length]);

  const setFormData = async () => {
    const product  = await getSingleProductAction(_id);
    setForm(product);
  };


  useEffect(() => {
    setOptions(categories.map((category) => ({ value: category.title, label: category.title })));
  }, [categories]);

  const inputs = [
    {
      label: "Product Name",
      name: "name",
      type: "text",
      placeholder: "Enter Product Name",
      value: form?.name,
      required: true,
      //   requiredMessage: "Product Name is required",
    },
    {
      label: "Product Category",
      name: "category",
      type: "select",
      placeholder: "Select Product Category",
      required: true,
      value: form?.category,
      options: [{ value: "", label: "Select Product Category" }, ...options],
    },
    {
      label: "Product SKU",
      name: "sku",
      type: "text",
      placeholder: "Enter Product SKU",
      value: form?.sku,
      required: true,
    },
    {
      label: "Product Price",
      name: "price",
      type: "number",
      placeholder: "Enter Product Price",
      value: form?.price,
      required: true,
    },
    {
      label: "Product stock",
      name: "stock",
      type: "number",
      placeholder: "Enter Product Quantity",
      value: form?.stock,
      required: true,
    },
    {
      label: "Procudt Sale Price",
      name: "salePrice",
      type: "number",
      value: form?.salePrice,
      placeholder: "Enter Product Sale Price",
    },
    {
      label: "Product Sale Start",
      name: "saleStart",
      type: "text",
      value: form?.saleStart,
      placeholder: "Enter Product Sale Start Date",
    },
    {
      label: "Product Sale End",
      name: "saleEnd",
      type: "text",
      value: form?.saleEnd,
      placeholder: "Enter Product Sale End Date",
    },
    {
      label: "Product Description",
      name: "description",
      type: "text",
      placeholder: "Enter Product Description",
      value: form?.description,
      required: true,
    },
    { label: "Images", name: "images", type: "text", placeholder: "Enter Images", required: true },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await dispatch(updateProductAction(form));
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
