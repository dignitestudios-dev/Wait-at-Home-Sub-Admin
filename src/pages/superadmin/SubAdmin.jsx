import React, { useState } from "react";
import SubAdminTable from "../../components/superadmin/app/subadmin/SubAdminTable";
import AddSubAdmin from "../../components/superadmin/app/subadmin/AddSubAdmin";
import { useFormik } from "formik";
import { AddSubAdminValues } from "../../init/app/AddSubAdminValues";
import { AddSubAdminSchema } from "../../schema/app/AddSubAdminSchema";
import SuccessAdded from "../../components/superadmin/app/subadmin/SuccessAdded";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import axios from "../../axios";
import { useGlobal } from "../../hooks/api/Get";
const SubAdmin = () => {
  const [addSubAdminModal, setAddSubAdminModal] = useState(false);
  const [addSuccessModal, setAddSuccessModal] = useState(false);
  const [subadminloading, setSubAdminLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: AddSubAdminValues,
      validationSchema: AddSubAdminSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values, { resetForm }) => {
        setSubAdminLoading(true);
        const payload = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          role: "sub-admin",
          password: values.password,
        };
        try {
          const response = await axios.post("/admin/admin-signup", payload);
          if (response.status === 200) {
            SuccessToast(response?.data?.message);
            setAddSubAdminModal(false);
            setAddSuccessModal(true);
            setUpdate((prev) => !prev);
              resetForm();
          }
        } catch (error) {
          ErrorToast(error?.response?.data?.message);
        } finally {
          setSubAdminLoading(false);
        }
      },
    });
  const { loading, data, pagination } = useGlobal(
    "/admin/get-all-subadmins",
    currentPage,
    search,
    update
  );
  return (
    <div>
      <SubAdminTable
        loading={loading}
        pagination={pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
        handleSubAdminAdd={() => setAddSubAdminModal(true)}
      />
      <AddSubAdmin
        loading={subadminloading}
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
