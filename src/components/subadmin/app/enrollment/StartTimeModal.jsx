import React, { useState } from "react";
import { ErrorToast, SuccessToast } from "../../../global/Toaster";
import axios from "../../../../axios";
const StartTimeModal = ({ onClose, setUpdate, type }) => {
  const [maxServings, setMaxServings] = useState("");
  const [averageWaitingTime, setAverageWaitingTime] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSaveConfig = async () => {
    if (type === "quantity" && !maxServings) {
      return ErrorToast("Please enter quantity.");
    }

    if (type === "time" && !averageWaitingTime) {
      return ErrorToast("Please select time.");
    }
    const payload =
      type === "quantity"
        ? {
          maxServings: Number(maxServings),
        }
        : {
          averageWaitingTimeMinutes: Number(averageWaitingTime),
        };

    try {
      setSaving(true);
      const response = await axios.post("/admin/update-config", {
        ...payload,
        isServingActive: true,

      });

      if (response?.status === 200) {
        SuccessToast(response?.data?.message || "Configuration updated!");
        setUpdate((prev) => !prev);
        onClose();
      }
    } catch (error) {
      console.error("Error updating config:", error);
      ErrorToast("Failed to update configuration.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-[500px] shadow-lg animate-fadeIn">
        <h2 className="text-lg font-semibold mb-4 text-[#5E2E86]">
          {type === "quantity" ? "Select Number of Staff Members " : "Set Time Frame"}
        </h2>


        {type === "quantity" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Select how many doctors are in the clinic and can see patients during the session. <br /> 
              If you have a higher ratio of vet techs to doctors working, you may be able to select a
              shorter time interval for each patient.
            </label>
            {/* <p className="text-[12px] text-gray-600 mb-3 ">Total staff available to serve pets.</p> */}
            <input
              type="number"
              value={maxServings}
              onChange={(e) => setMaxServings(e.target.value)}
              placeholder="Enter Number of Staff"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5E2E86]"
            />
          </div>
        )}

        {type === "time" && (

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Select an average time interval for each patient exam. <br /> For example, if two doctors are in
              clinic, you can expect each patient to be seen within 15 minutes; if only 1 doctor is in
              clinic; the interval may need to be 30 minutes.
              <br />
              If you are also taking appointments during this session, you may want to select a longer
              interval to allow for spacing of patients from the virtual waiting list alongside
              appointments. <br />
               You can always adjust this time frame if something unexpected happens
              or a staffing change occurs.
            </label>
            {/* <p className="text-[12px] text-gray-600 mb-3 ">Estimated time needed to serve each pet.</p> */}

            <select
              value={averageWaitingTime}
              onChange={(e) => setAverageWaitingTime(e.target.value)}
              className="w-full border rounded-lg mt-2 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5E2E86]"
            >
              <option value="">Select time</option>
              <option value="10">10 minutes</option>
              <option value="15">15 minutes</option>
              <option value="20">20 minutes</option>
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
            </select>
          </div>
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveConfig}
            disabled={saving}
            className="px-4 py-2 bg-[#5E2E86] text-white rounded-lg hover:bg-[#4a236a]"
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartTimeModal;
