import React from "react";
import NotificationForm from "../../../components/subadmin/app/pushnotification/NotificationForm";
import { useFormik } from "formik";
import * as Yup from "yup";

const PushNotification = () => {
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
      onSubmit: async (values) => {
        const data = {
          title: values?.title,
          description: values?.description,
        };

        // postData("/admin/login", false, null, data, processLogin);
      },
    });
  return (
    <div>
      <NotificationForm
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
