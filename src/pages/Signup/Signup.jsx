import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/Authprovider/Authprovider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const Signup = () => {
  const { createUser, successToast,errorToast } = useContext(AuthContext);
  const [isDisable, setdisable] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handlreCapchaValidation = (e) => { 
    const user_chaptcha = e.target.value;
    if(validateCaptcha(user_chaptcha) == true){
        setdisable(false)
    }else{
        setdisable(true)
    }
   }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(res => {
            if(res.user){
                successToast("You Loged In successfully!")
            }
        })
        .catch(err => {
            console.log(err.message)
            if (err.message === "Firebase: Error (auth/invalid-email).") {
                errorToast("Invalid Email!")
            }
            else if (err.message === "Firebase: Error (auth/network-request-failed).") {
                errorToast("Please check Your Network!")
            }
           else if(err.message === "Firebase: Error (auth/email-already-in-use)."){
            errorToast("This email already Used!")
            }
            else{errorToast("Login Faild!")}
    })
  };



  return (
    <>
    <Helmet>
        <title>Booms | Sign Up</title>
    </Helmet>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            className="form-input mt-1 block w-full border bg-gray-100 rounded-lg h-12"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className=" text-xs text-red-600">Name required</span>
          )}
        </label>
        <label className="block mb-4">
          Email:
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="form-input mt-1 block w-full border bg-gray-100 rounded-lg h-12"
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
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern:
                /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+{};:'",.<>/?[\]`|])[^ ]{8,}$/,
            })}
            className="form-input mt-1 block w-full border bg-gray-100 rounded-lg h-12"
          />
          {errors.password?.type === "required" && (
            <span className=" text-red-600">Password required.</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className=" text-red-600">Password Must be 6 charectar.</span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className=" text-red-600">
              Password Must be less then 20 charectar.
            </span>
          )}
          {errors.password?.type === "pattern" && (
            <p className=" text-xs text-red-600">
              Password Must Have: <br />
              <span className=" text-[9px] text-red-800">
                1.One UpperCase
              </span>{" "}
              <br />
              <span className=" text-[9px] text-red-800">
                2.One Number
              </span>{" "}
              <br />
              <span className=" text-[9px] text-red-800">
                3.One Special Charectar
              </span>
            </p>
          )}
        </label>
        <label className="block mb-4">
          <LoadCanvasTemplate />
          <input
            type="text"
            name="chaptcha"
            onBlur={handlreCapchaValidation}
            className="form-input mt-1 block w-full border bg-gray-100 rounded-lg h-12"
          />
        </label>
        <button
          disabled={isDisable}
          type="submit"
          className="btn btn-primary"
        >
          Sign Up
        </button>
      </form>
    </div></>
  );
};

export default Signup;
