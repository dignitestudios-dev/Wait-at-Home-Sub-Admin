import React, { useState } from "react";
import { ErrorToast, SuccessToast } from "../../../global/Toaster";
import axios from "../../../../axios";
const StartTimeModal = ({ onClose, setUpdate }) => {
  const [maxServings, setMaxServings] = useState("");
  const [averageWaitingTime, setAverageWaitingTime] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSaveConfig = async () => {
    if (!maxServings || !averageWaitingTime) {
      return ErrorToast("Please fill in all fields.");
    }

    try {
      setSaving(true);
      const response = await axios.post("/admin/update-config", {
        maxServings: Number(maxServings),
        isServingActive: true,
        averageWaitingTimeMinutes: Number(averageWaitingTime),
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
      <div className="bg-white rounded-2xl p-6 w-[380px] shadow-lg animate-fadeIn">
        <h2 className="text-lg font-semibold mb-4 text-[#5E2E86]">
          Set Time Frames
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Number of staff on duty
          </label>
          {/* <p className="text-[12px] text-gray-600 mb-3 ">Total staff available to serve pets.</p> */}
          <input
            type="number"
            value={maxServings}
            onChange={(e) => setMaxServings(e.target.value)}
            placeholder="Enter quantity"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5E2E86]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Average exam time
          </label>
                    {/* <p className="text-[12px] text-gray-600 mb-3 ">Estimated time needed to serve each pet.</p> */}

          <select
            value={averageWaitingTime}
            onChange={(e) => setAverageWaitingTime(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5E2E86]"
          >
            <option value="">Select time</option>
            <option value="10">10 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="120">2 hours</option>
          </select>
        </div>

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
