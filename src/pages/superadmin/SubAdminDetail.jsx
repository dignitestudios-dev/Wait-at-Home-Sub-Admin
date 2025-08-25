import React, { useState } from "react";
import SubAdminProfile from "../../components/superadmin/app/subadmindetail/SubAdminProfile";
import SubAdminAbout from "../../components/superadmin/app/subadmindetail/SubAdminAbout";
import SubAdminDetailModal from "../../components/superadmin/app/subadmindetail/SubAdminDetailModal";
import SubAdminDeleteModal from "../../components/superadmin/app/subadmindetail/SubAdminDeleteModal";
import SuccessAdded from "../../components/superadmin/app/subadmin/SuccessAdded";
import { useFormik } from "formik";
import { EditSubAdminValues } from "../../init/app/EditSubAdminValues";
import { EditSubAdminSchema } from "../../schema/app/EditSubAdminSchema";

const SubAdminDetail = () => {
  const [active, setActive] = useState("PetProfile");
  const [subAdminDetailModal, setSubAdminDetailModal] = useState(false);
  const [updateSuccesModal, setUpdateSuccesModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [aboutData, setAboutData] = useState({
    name: "Leo Denzin",
    email: "leodenzin@gmail.com",
    phone: "+1 123 456 7899",
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: aboutData.name || "",
        email: aboutData.email || "",
        phone: aboutData.phone || "",
      },
      enableReinitialize: true,
      validationSchema: EditSubAdminSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: async (values) => {
        setAboutData(values);
        setSubAdminDetailModal(false);
        setUpdateSuccesModal(true);
      },
    });
  return (
    <div>
      <SubAdminProfile deleteModal={() => setDeleteModal(true)} />
      <div className="w-full mt-3">
        <SubAdminAbout handleInfoEdit={() => setSubAdminDetailModal(true)} />
      </div>
      <SubAdminDetailModal
        isOpen={subAdminDetailModal}
        onClose={() => setSubAdminDetailModal(false)}
        values={values}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
      />
      <SubAdminDeleteModal
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
      />
      <SuccessAdded
        text={"Info Updated"}
        para={"Admin profile information has been updated successfully"}
        isOpen={updateSuccesModal}
        onClose={() => setUpdateSuccesModal(false)}
      />
    </div>
  );
};

export default SubAdminDetail;
