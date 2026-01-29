import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { loginValues } from "../../init/authentication/dummyLoginValues";
import { signInSchema } from "../../schema/authentication/dummyLoginSchema";
import { NavLink, useNavigate } from "react-router";
import { ActiveCheck, InactiveCheck, Logo } from "../../assets/export";
import GlobalInputs from "../../components/global/GlobalInputs";
import GlobalButton from "../../components/global/GlobalButton";
import axios from "../../axios";
import { AppContext } from "../../context/AppContext";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { Auth, fcmToken } = useContext(AppContext);
  const [rememberMe, setRememberMe] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: loginValues,
      validationSchema: signInSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values) => {
        const data = {
          email: values?.email,
          password: values?.password,
          role: "admin",
          fcmToken: fcmToken,
        };

        setLoading(true);
        try {
          const response = await axios.post("/admin/admin-signin", data);
          if (response?.status === 200) {
            SuccessToast(response?.data?.message);
            Auth(response?.data);
            navigate("/app/enrollment");
          }
        } catch (error) {
          ErrorToast(error?.response?.data?.message);
        } finally {
          setLoading(false);
        }
      },
    });

  return (
    <div className="rounded-[30px] flex justify-center py-4 items-center flex-col bg-[#FFFFFF66]/30 w-[599px]">
      <div className="bg-[#f5f8fa] w-[200px] h-[200px] flex items-center justify-center rounded-full ">
        <img
          src={Logo}
          alt="logo"
          className=" h-[120px] object-contain w-[120px]"
        />
      </div>
      <div className="w-auto flex flex-col mt-4 justify-center items-center">
        <h2 className="text-[22px] font-[600] leading-[48px] capitalize">
          Administrator Login
        </h2>
        {/* <p className="text-[13px] font-[400] text-center leading-[27px] text-[#565656]">
          Welcome back! Enter your details to login
        </p> */}
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
          <GlobalInputs
            value={values.password}
            id={"password"}
            name={"password"}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
            label={"password"}
            type="password"
            placeholder={"Enter Your password"}
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-[#565656]">
            <img
              onClick={() => setRememberMe((prev) => !prev)}
              className="w-[18px] cursor-pointer h-[18px] "
              src={rememberMe ? ActiveCheck : InactiveCheck}
              alt=""
            />
            Remember me
          </label>
          <NavLink
            to="/auth/forgot-password"
            className="text-[#5E2E86] text-[13px] font-medium hover:underline"
          >
            Forgot password?
          </NavLink>
        </div>
        <div className="w-[426px]">
          <GlobalButton loading={loading} children={"Login"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
