import React, { useState } from "react";
import NotificationForm from "../../../components/subadmin/app/pushnotification/NotificationForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";

const PushNotification = () => {
  const [loading, setLoading] = useState(false);
  const validateSchema = Yup.object({
    title: Yup.string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters"),
    description: Yup.string()
      .required("Description is required")
      .min(5, "Description must be at least 5 characters"),
  });
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: { title: "", description: "" },
      validationSchema: validateSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, { resetForm }) => {
        const data = {
          title: values?.title,
          message: values?.description,
        };
        setLoading(true);
        try {
          const response = await axios.post("/admin/push-notification", data);
          if (response?.status === 200) {
            SuccessToast(response?.data?.message);
            resetForm();
          }
        } catch (error) {
          ErrorToast(error?.response?.data?.message);
        } finally {
          setLoading(false);
        }
      },
    });
  return (
    <div>
      <NotificationForm
        loading={loading}
        values={values}
        handleChange={handleChange}
        handleBlur={handleBlur}
        errors={errors}
        touched={touched}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default PushNotification;
