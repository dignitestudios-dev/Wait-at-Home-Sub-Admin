import React, { useState } from "react";
import SubAdminTable from "../../components/superadmin/app/subadmin/SubAdminTable";
import AddSubAdmin from "../../components/superadmin/app/subadmin/AddSubAdmin";
import { useFormik } from "formik";
import { AddSubAdminValues } from "../../init/app/AddSubAdminValues";
import { AddSubAdminSchema } from "../../schema/app/AddSubAdminSchema";
import SuccessAdded from "../../components/superadmin/app/subadmin/SuccessAdded";

const SubAdmin = () => {
  const [addSubAdminModal, setAddSubAdminModal] = useState(false);
  const [addSuccessModal, setAddSuccessModal] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: AddSubAdminValues,
      validationSchema: AddSubAdminSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values) => {
        setAddSubAdminModal(false);
        setAddSuccessModal(true);
        // postData("/admin/login", false, null, data, processLogin);
      },
    });
  return (
    <div>
      <SubAdminTable handleSubAdminAdd={() => setAddSubAdminModal(true)} />
      <AddSubAdmin
        onClose={() => setAddSubAdminModal(false)}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        isOpen={addSubAdminModal}
      />
      <SuccessAdded
        text={"Profile Added"}
        para={"Admin profile has been added successfully"}
        isOpen={addSuccessModal}
        onClose={() => setAddSuccessModal(false)}
      />
    </div>
  );
};

export default SubAdmin;
