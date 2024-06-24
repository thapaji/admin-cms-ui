import React, { useEffect } from "react";
import useForm from "../../Hooks/useForm";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/common/custom-input/CustomInput";
import { toast } from "react-toastify";
import { login } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    user?._id && navigate("/admin/dashboard");
  }, [user]);

  const inputs = [
    { label: "Email", name: "email", type: "email", placeholder: "Enter email" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
  ];
  const { form, setForm, handleChange } = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return toast.error("Please enter email and/or password");
    }
    login(dispatch, form);

    // createNewAdminAction(rest);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="shadow-lg p-4 rounded m-auto" style={{ width: "450px" }}>
        <Form className="" onSubmit={handleSubmit}>
          <h3>Login</h3>
          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleChange} />
          ))}
          <div className="d-grid">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
