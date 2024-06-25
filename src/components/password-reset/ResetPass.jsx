import React from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { CustomInput } from "../common/custom-input/CustomInput";
import useForm from "../../Hooks/useForm";

export const ResetPass = ({message}) => {
  const inputs = [
    { label: "OTP", name: "otp", type: "text", placeholder: "Enter your otp" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
    {
      label: "Confirm Password",
      name: "cpassword",
      type: "password",
      placeholder: "Confirm password",
    },
  ];
  const { form, setForm, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return toast.error("Please enter email and/or password");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Reset Password</h3>
      <Alert>{message}</Alert>
      {inputs.map((item, i) => (
        <CustomInput key={i} {...item} onChange={handleChange} />
      ))}
      <div className="d-grid">
        <Button type="submit">Login</Button>
      </div>
    </Form>
  );
};
