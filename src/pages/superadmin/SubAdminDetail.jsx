import React, { useState } from "react";
import SubAdminProfile from "../../components/superadmin/app/subadmindetail/SubAdminProfile";
import SubAdminAbout from "../../components/superadmin/app/subadmindetail/SubAdminAbout";
import SubAdminDetailModal from "../../components/superadmin/app/subadmindetail/SubAdminDetailModal";
import SubAdminDeleteModal from "../../components/superadmin/app/subadmindetail/SubAdminDeleteModal";
import SuccessAdded from "../../components/superadmin/app/subadmin/SuccessAdded";
import { useFormik } from "formik";
import { EditSubAdminSchema } from "../../schema/app/EditSubAdminSchema";
import { useLocation, useNavigate, useParams } from "react-router";
import { ErrorToast, SuccessToast } from "../../components/global/Toaster";
import axios from "../../axios";
import { useFetchById } from "../../hooks/api/Get";
import { UserDetailsSkeleton } from "../../components/global/Skeleton";
const SubAdminDetail = () => {
  const navigate = useNavigate();
  const [subAdminDetailModal, setSubAdminDetailModal] = useState(false);
  const [updateSuccesModal, setUpdateSuccesModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [aboutData, setAboutData] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [restrictLoader, setRestrictLoader] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const { id } = useParams();
  const { loading, data } = useFetchById(`/admin/get-subadmin/${id}`, update);
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
        const payload = {
          subAdminId: aboutData?._id,
          name: values.name,
          phone: values.phone,
        };
        setUpdateLoading(true);
        try {
          const response = await axios.post(`/admin/update-subadmin`, payload);
          if (response?.status === 200) {
            SuccessToast(response?.data?.message);
            setSubAdminDetailModal(false);
            setUpdateSuccesModal(true);
            setUpdate((prev) => !prev);
          }
        } catch (error) {
          ErrorToast(error?.response?.data?.message);
        } finally {
          setUpdateLoading(false);
        }
      },
    });

  const handleDelete = async () => {
    if (!deleteId) return;
    const payload = {
      subAdminId: deleteId,
    };
    setDeleteLoading(true);
    try {
      const response = await axios.post(`/admin/delete-subadmin`, payload);

      if (response.status === 200) {
        SuccessToast("Sub-admin deleted successfully!");
        setDeleteId("");
        navigate("/app/sub-admin");
      }
    } catch (error) {
      console.error("🚀 ~ handleDelete ~ error:", error);
      ErrorToast(error?.response?.data?.message || "Failed to delete");
    } finally {
      setDeleteLoading(false);
    }
  };
  const handleRestrict = async (id) => {
    const payload = {
      userId: id,
    };
    setRestrictLoader(true);
    try {
      const response = await axios.post("/admin/restrict-user", payload);
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setRestrictLoader(false);
    }
  };

  return (
    <div>
      {loading ? (
        <UserDetailsSkeleton />
      ) : (
        <>
          <SubAdminProfile
            user={data}
            deleteModal={() => {
              setDeleteId(data?._id);
              setDeleteModal(true);
            }}
            handleRestrict={handleRestrict}
            restrictLoader={restrictLoader}
          />
          <div className="w-full mt-3">
            <SubAdminAbout
              user={data}
              handleInfoEdit={() => {
                setAboutData(data);
                setSubAdminDetailModal(true);
              }}
            />
          </div>
          <SubAdminDetailModal
            updateLoading={updateLoading}
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
            deleteLoading={deleteLoading}
            handleDelete={handleDelete}
            isOpen={deleteModal}
            onClose={() => {
              setDeleteModal(false);
            }}
          />
          <SuccessAdded
            text={"Info Updated"}
            para={"Admin profile information has been updated successfully"}
            isOpen={updateSuccesModal}
            onClose={() => setUpdateSuccesModal(false)}
          />
        </>
      )}
    </div>
  );
};

export default SubAdminDetail;
