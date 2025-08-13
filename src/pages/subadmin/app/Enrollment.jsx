import React, { useState } from "react";
import EnrollmentSlider from "../../../components/subadmin/app/enrollment/EnrollmentSlider";
import CancelReasonModal from "../../../components/subadmin/app/enrollment/CancelReasonModal";
import CancelSuccessFull from "../../../components/subadmin/app/enrollment/CancelSuccessFull";
import EnrollmentTable from "../../../components/subadmin/app/enrollment/EnrollmentTable";
import ViewCancelReason from "../../../components/subadmin/app/enrollment/ViewCancelReason";
import ViewPetDetailModal from "../../../components/subadmin/app/enrollment/ViewPetDetailModal";

const Enrollment = () => {
  const [cancelReasonDiscription, setCancelReasonDiscription] = useState("");
  const [errorReasonDiscription, setErrorReasonDiscription] = useState("");
  const [cancelReasonModal, setCancelReasonModal] = useState(false);
  const [cancelSuccessFull, setCancelSuccessFull] = useState(false);
  const [viewCancelReason, setViewCancelReason] = useState(false);
  const [petDetailModal, setPetDetailModal] = useState(false);
  const handleCancelChange = (e) => {
    setCancelReasonDiscription(e.target.value);
    if (e.target.value.trim() !== "") {
      setErrorReasonDiscription("");
    }
  };
  const handleCancelSubmit = () => {
    if (!cancelReasonDiscription.trim()) {
      setErrorReasonDiscription("Please fill in the description.");
      return;
    }
    const payload = {
      cancelReason: cancelReasonDiscription,
    };
    setCancelReasonModal(false);
    setCancelSuccessFull(true);
    console.log(payload, "CancelPayload");
  };
  return (
    <div>
      <h1 className="text-[24px] font-[600] text-[#5E2E86] capitalize">
        Wait at home queue
      </h1>
      <EnrollmentSlider handleCancel={() => setCancelReasonModal(true)} />
      <EnrollmentTable
        handleViewDetail={() => setPetDetailModal(true)}
        handleViewCancel={() => setViewCancelReason(true)}
      />
      <ViewCancelReason
        isOpen={viewCancelReason}
        onClose={() => setViewCancelReason(false)}
      />
      <ViewPetDetailModal isOpen={petDetailModal} onClose={()=>setPetDetailModal(false)} />
      <CancelReasonModal
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
    </div>
  );
};

export default Enrollment;
