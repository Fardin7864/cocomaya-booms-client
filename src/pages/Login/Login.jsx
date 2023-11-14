import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/Authprovider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const {login, socialLogin, successToast, errorToast} = useContext(AuthContext);
    const localtion = useLocation();
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    login(data.email, data.password)
    .then((res) => {
        console.log(res)
        successToast("Log In Successfully!")
        navigate(localtion?.state ? localtion.state : '/');
    })
    .catch(err=> {
        console.log(err)
        errorToast(err.message)
    })
};

  return (
    <>
      <Helmet>
        <title>Booms | Login</title>
      </Helmet>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Log In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-4">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="form-input mt-1 block w-full border bg-gray-100 rounded-lg text-lg py-2 pl-3"
            />
            {errors.email && (
              <span className=" text-xs text-red-600">Email required</span>
            )}
          </label>
          <label className="block mb-4">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern:
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>/?[\]`|])[^ ]{8,}$/,
              })}
              className="form-input mt-1 block w-full border bg-gray-100 rounded-lg text-lg py-2 pl-3"
            />
            {errors.password?.type === "required" && (
              <p className=" text-xs text-red-600">Password Invalid!</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className=" text-xs text-red-600">Password Invalid!</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className=" text-xs text-red-600">Password Invalid!</p>
            )}
            {errors.password?.type === "pattern" && (
              <p className=" text-xs text-red-600">Password Invalid!</p>
            )}
          </label>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
          <p>Don't have account ? <Link className=" text-blue-600" to="/signup">Sign Up</Link></p>
        </form>
      </div>
    </>
  );
};

export default Login;
