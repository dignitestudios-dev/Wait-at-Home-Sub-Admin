import React, { useState } from "react";
import EnrollmentSlider from "../../../components/subadmin/app/enrollment/EnrollmentSlider";
import CancelReasonModal from "../../../components/subadmin/app/enrollment/CancelReasonModal";
import CancelSuccessFull from "../../../components/subadmin/app/enrollment/CancelSuccessFull";
import EnrollmentTable from "../../../components/subadmin/app/enrollment/EnrollmentTable";
import ViewCancelReason from "../../../components/subadmin/app/enrollment/ViewCancelReason";
import ViewPetDetailModal from "../../../components/subadmin/app/enrollment/ViewPetDetailModal";
import { useGlobal } from "../../../hooks/api/Get";
import { ErrorToast, SuccessToast } from "../../../components/global/Toaster";
import axios from "../../../axios";
import { EnrollmentSliderSkeleton } from "../../../components/global/Skeleton";
import AddTimeModal from "../../../components/subadmin/app/enrollment/AddTimeModal";
import { UserPro } from "../../../assets/export";
import SelectTimeModal from "../../../components/subadmin/app/enrollment/SelectTimeModal";
const Enrollment = () => {
  const [cancelReasonDiscription, setCancelReasonDiscription] = useState("");
  const [errorReasonDiscription, setErrorReasonDiscription] = useState("");
  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const [cancelSuccessFull, setCancelSuccessFull] = useState(false);
  const [viewCancelReason, setViewCancelReason] = useState(false);
  const [petDetailModal, setPetDetailModal] = useState(false);
  const [selectedCancel, setSelectedCancel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedId, setSelectedId] = useState("");
  const [selectedComplete, setSelectedComplete] = useState("");
  const [selectedpet, setSelectedPet] = useState("");
  const [cancelloading, setCancelLoading] = useState(false);
  const [completeLoading, setCompleteLoading] = useState(false);
  const [timeLoading, setTimeLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [acceptModal, setAcceptModal] = useState(false);
  const [showAddTimeModal, setShowAddTimeModal] = useState(false);
  const [selectedType, setSelectedType] = useState("All");
  const { loading, data } = useGlobal("/admin/get-all-appointments", update);
  const handleCancelChange = (e) => {
    setCancelReasonDiscription(e.target.value);
    if (e.target.value.trim() !== "") {
      setErrorReasonDiscription("");
    }
  };
  const handleCancelSubmit = async () => {
    if (!cancelReasonDiscription.trim()) {
      setErrorReasonDiscription("Please fill in the description.");
      return;
    }
    const payload = {
      appointmentId: selectedId,
      cancelReason: cancelReasonDiscription,
      action: "cancelled",
    };
    setCancelLoading(true);
    try {
      const response = await axios.post(
        "/admin/complete-or-reject-appointment",
        payload
      );
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        setCancelReasonModal(false);
        setCancelSuccessFull(true);
        setUpdate((prev) => !prev);
        setCancelReasonDiscription("");
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setCancelLoading(false);
    }
  };
  const handleComplete = async (id) => {
    const payload = {
      appointmentId: selectedId,
      action: "completed",
    };
    setCompleteLoading(true);
    try {
      const response = await axios.post(
        "/admin/complete-or-reject-appointment",
        payload
      );
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        setAcceptModal(false);
        setSelectedId("");
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setCompleteLoading(false);
    }
  };
  const handleAddTime = async (hour, minutes) => {
    const totalMinutes = hour * 60 + minutes;

    const payload = {
      appointmentId: selectedId,
      time: totalMinutes,
    };

    setTimeLoading(true);
    try {
      const response = await axios.post(
        "/admin/complete-or-reject-appointment",
        payload
      );
      if (response?.status === 200) {
        SuccessToast(response?.data?.message);
        setShowAddTimeModal(false);
        setUpdate((prev) => !prev);
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message);
    } finally {
      setTimeLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-[24px] font-[600] text-[#5E2E86] capitalize">
        Wait at home queue
      </h1>
      
      {loading ? (
        <EnrollmentSliderSkeleton />
      ) : (
        <EnrollmentSlider
          setSelectedType={setSelectedType}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          data={data}
          setSelectedComplete={setSelectedComplete}
          handleCancel={() => setCancelReasonModal(true)}
          handleComplete={() => setAcceptModal(true)}
          completeLoading={completeLoading}
        />
      )}
      <EnrollmentTable
        setSelectedPet={setSelectedPet}
        loading={loading}
        setSelectedCancel={setSelectedCancel}
        data={data}
        handleViewDetail={() => setPetDetailModal(true)}
        handleViewCancel={() => {
          setViewCancelReason(true);
        }}
      />
      <ViewCancelReason
        selectedCancel={selectedCancel}
        isOpen={viewCancelReason}
        onClose={() => setViewCancelReason(false)}
      />
      <ViewPetDetailModal
        selectedpet={selectedpet}
        isOpen={petDetailModal}
        onClose={() => setPetDetailModal(false)}
      />
      <CancelReasonModal
        cancelloading={cancelloading}
        isOpen={cancelReasonModal}
        onClose={() => setCancelReasonModal(false)}
        handleClick={handleCancelSubmit}
        cancelReasonDiscription={cancelReasonDiscription}
        handleChange={handleCancelChange}
        errorReasonDiscription={errorReasonDiscription}
      />
      <CancelSuccessFull
        isOpen={cancelSuccessFull}
        onClose={() => setCancelSuccessFull(false)}
      />
      <AddTimeModal
        selectedType={selectedType}
        onClose={() => setAcceptModal(false)}
        loading={completeLoading}
        isOpen={acceptModal}
        user={{
          name: selectedComplete?.signUpRecord?.name || "N/A",
          profilePicture: selectedComplete?.signUpRecord?.profilePicture,
        }}
        onAddTime={() => {
          setAcceptModal(false);
          setShowAddTimeModal(true);
        }}
        onComplete={handleComplete}
      />
      <SelectTimeModal
        timeLoading={timeLoading}
        isOpen={showAddTimeModal}
        onClose={() => setShowAddTimeModal(false)}
        onAddTime={({ hours, minutes }) => handleAddTime(hours, minutes)}
      />
    </div>
  );
};

export default Enrollment;
