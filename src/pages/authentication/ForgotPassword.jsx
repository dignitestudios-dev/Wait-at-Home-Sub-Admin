import React, { useState } from "react";
import { useLogin } from "../../hooks/api/Post";
import { processLogin } from "../../lib/utils";
import { useFormik } from "formik";
import { loginValues } from "../../init/authentication/dummyLoginValues";
import { signInSchema } from "../../schema/authentication/dummyLoginSchema";
import { NavLink, useNavigate } from "react-router";
import { Lock, Logo } from "../../assets/export";
import GlobalInputs from "../../components/global/GlobalInputs";
import GlobalButton from "../../components/global/GlobalButton";
import { IoIosArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { loading, postData } = useLogin();

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
      }),
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values) => {
        const data = {
          email: values?.email,
          password: values?.password,
        };
        navigate("/auth/otp-forgot");
      },
    });

  return (
    <div className="rounded-[30px] h-[872px] relative flex justify-center py-4 items-center flex-col bg-[#FFFFFF66]/30 w-[599px]">
      <div
        onClick={() => navigate(-1)}
        className="bg-[#00AAAD] rounded-[14px] cursor-pointer h-[48px] w-[48px] flex items-center justify-center p-2 absolute top-10 left-6 "
      >
        <IoIosArrowRoundBack color="white" size={50} />
      </div>
      <div className=" ">
        <img
          src={Lock}
          alt="logo"
          className=" h-[90px] object-contain w-[90px]"
        />
      </div>
      <div className="w-auto flex flex-col mt-4 justify-center items-center">
        <h2 className="text-[32px] font-[600] leading-[48px] capitalize">
          Forget password
        </h2>
        <p className="text-[14px] w-[316px] font-[400] text-center leading-[27px] text-[#565656]">
          Please enter your registered email to get started on resetting your
          password
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 space-y-4">
        <div className="w-[426px]">
          <GlobalInputs
            value={values.email}
            id={"email"}
            name={"email"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            label={"email address"}
            type="email"
            placeholder={"Enter Your Email"}
          />
        </div>

        <div className="w-[426px]">
          <GlobalButton children={"Get OTP"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
