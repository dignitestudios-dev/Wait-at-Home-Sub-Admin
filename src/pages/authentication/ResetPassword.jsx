import { useFormik } from "formik";
import React, { useState } from "react";
import PasswordUpdated from "./PasswordUpdated";
import { useNavigate } from "react-router";
import { ResetValues } from "../../init/authentication/ResetValues";
import { ResetSchema } from "../../schema/authentication/ResetSchema";
import { LockReset } from "../../assets/export";
import GlobalInputs from "../../components/global/GlobalInputs";
import GlobalButton from "../../components/global/GlobalButton";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: ResetValues,
      validationSchema: ResetSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, action) => {
        const data = {
          email: values?.password,
          password: values?.Cpassword,
        };
        setIsUpdate(true);
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      },
    });

  return (
    <>
      {isUpdate ? (
        <PasswordUpdated />
      ) : (
        <div className="rounded-[30px] h-[872px] relative flex justify-center py-4 items-center flex-col bg-[#FFFFFF66]/30 w-[599px]">
          <div
            className=""
          >
            <div className="flex justify-center mb-6">
              <img
                src={LockReset}
                alt="Logo"
                className="w-[106px] sm:w-[300px] lg:w-[89.9px] h-auto"
              />
            </div>

            <div className="text-center mb-6 mt-5">
              <h2 className="text-[26px] sm:text-[28px] lg:text-[32px] font-[600] text-[#1F1F1F]">
                Set a new Password
              </h2>
              <p className="text-[#565656] text-[13px] font-[400] mt-1">
                Create a Strong password to secure your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="w-[426px]">
                <GlobalInputs
                  label="Password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder={"Enter Password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.password}
                  touched={touched.password}
                  max={50}
                />
              </div>
              <div className="w-[426px]">
                <GlobalInputs
                  label="Confirm Password"
                  type="password"
                  name="Cpassword"
                  id="Cpassword"
                  placeholder={"Enter Confirm  Password"}
                  value={values.Cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.Cpassword}
                  touched={touched.Cpassword}
                  max={50}
                />
              </div>

              <GlobalButton type="submit" children={"Set Password"} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
