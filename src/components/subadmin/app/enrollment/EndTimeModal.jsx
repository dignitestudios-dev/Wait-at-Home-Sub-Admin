import React, { useState } from "react";
import { ErrorToast, SuccessToast } from "../../../global/Toaster";
import axios from "../../../../axios";

const EndTimeModal = ({ onClose, setUpdate }) => {
  const [saving, setSaving] = useState(false);

  const handleConfirmEnd = async () => {
    try {
      setSaving(true);
      const response = await axios.post("/admin/update-config", {
        isServingActive: false,
      });

      if (response?.status === 200) {
        SuccessToast(
          response?.data?.message || "Serving has ended successfully!"
        );
        setUpdate((prev) => !prev);
        onClose();
      }
    } catch (error) {
      console.error("Error updating config:", error);
      ErrorToast("Failed to end serving time. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white w-[400px] rounded-2xl p-6 shadow-xl animate-fadeIn">
        <h2 className="text-xl font-bold text-[#5E2E86] text-center mb-3">
          End Current Session?{" "}
        </h2>

        <p className="text-gray-700 text-center mb-6 leading-relaxed">
          Are you sure you want to{" "}
          <span className="font-semibold text-[#5E2E86]">
             End Current Session?
          </span>
        </p>

        <div className="flex justify-center gap-3 mt-4">
           <button
            onClick={handleConfirmEnd}
            disabled={saving}
            className={`px-5 py-2 rounded-lg w-[200px] text-white font-semibold transition-all duration-300 ${
              saving
                ? "bg-[#b18bcc] cursor-not-allowed"
                : "bg-[#5E2E86] hover:bg-[#4a236a]"
            }`}
          >
            {saving ? "Ending..." : "Yes, End Now"}
          </button>
          <button
            onClick={onClose}
            disabled={saving}
            className="px-5 py-2 rounded-lg w-[200px] bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium transition"
          >
            No
          </button>

         
        </div>
      </div>
    </div>
  );
};

export default EndTimeModal;
