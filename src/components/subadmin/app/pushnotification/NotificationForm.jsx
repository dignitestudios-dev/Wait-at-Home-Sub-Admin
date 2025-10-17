import React from "react";
import GlobalInputs from "../../../global/GlobalInputs";

const NotificationForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  loading,
}) => {
  return (
    <div>
      <h2 className="text-[24px] font-[600] mb-2">Send Notifications</h2>
      <form onSubmit={handleSubmit}>
        <div className="border w-full mt-4 bg-[#FFFFFF66] rounded-[32px] p-8 space-y-5">
          {/* Title */}
          <GlobalInputs
            value={values.title}
            error={errors.title}
            touched={touched.title}
            id="title"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Type Here...."
            label="Title of Notification"
          />

          {/* Description */}
          <label className="block mb-1 text-sm font-medium text-[#333] capitalize">
            Description of Notification
          </label>
          <textarea
            name="description"
            rows={6}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
            placeholder="Type Here...."
            className={`w-full rounded-xl px-4 py-3 text-[14px] font-[400] bg-white placeholder:text-[#616161] outline-none border transition
              ${
                errors.description && touched.description
                  ? "border-red-500 ring-1 ring-red-500"
                  : "border focus:border-[#10C0B6] focus:ring-2 focus:ring-[#10C0B6]"
              }`}
          ></textarea>
          {errors.description && touched.description && (
            <p className="text-red-500 text-[12px] mt-1 font-medium">
              {errors.description}
            </p>
          )}

          {/* Schedule Date & Time */}
          <div className="mt-4">
            <label className="block mb-1 text-sm font-medium text-[#333] capitalize">
              Schedule Date & Time
            </label>
            <input
              type="datetime-local"
              name="scheduleAt"
              id="scheduleAt"
              value={values.scheduleAt}
              onChange={handleChange}
              onBlur={handleBlur}
               min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16)} 
              className={`w-full rounded-xl px-4 py-3 text-[14px] font-[400] bg-white placeholder:text-[#616161] outline-none border transition
                ${
                  errors.scheduleAt && touched.scheduleAt
                    ? "border-red-500 ring-1 ring-red-500"
                    : "border focus:border-[#10C0B6] focus:ring-2 focus:ring-[#10C0B6]"
                }`}
            />
            {errors.scheduleAt && touched.scheduleAt && (
              <p className="text-red-500 text-[12px] mt-1 font-medium">
                {errors.scheduleAt}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-[#5E2E86] font-[600] text-[16px] w-[220px] h-[48px] text-white rounded-[16px] transition-all duration-300 ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#4a236a]"
            }`}
          >
            {loading ? "Sending..." : "Push"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotificationForm;
