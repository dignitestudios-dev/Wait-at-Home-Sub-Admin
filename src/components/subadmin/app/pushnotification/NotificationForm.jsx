import React from "react";
import GlobalInputs from "../../../global/GlobalInputs";

const NotificationForm = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div>
      <h2 className="text-[24px]  font-[600]  ">Send Notifications</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="border  w-full mt-4 bg-[#FFFFFF66] rounded-[32px] p-8 space-y-4">
          <GlobalInputs
            value={values.title}
            error={errors.title}
            touched={errors.title}
            id={"title"}
            name={"title"}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={"Type Here...."}
            label={"Title of Notification"}
          />
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
            className={`w-full rounded-xl pr-11 px-4 py-3  mb-1 text-[14px] font-[400] bg-white placeholder:text-[#616161] outline-none border transition
            ${
              errors.description && touched.description
                ? "border-red-500 ring-1 ring-red-500"
                : "border focus:border-[#10C0B6] focus:ring-2 focus:ring-[#10C0B6]"
            }
            ${
              errors.description
                ? "bg-gray-100 cursor-not-allowed opacity-60"
                : ""
            }
          `}
          ></textarea>
          {errors.description && touched.description && (
            <p className="text-red-500 text-[12px] mt-1 font-medium">
              {errors.description}
            </p>
          )}
          <button className="bg-[#5E2E86] font-[600]  text-[16px] w-[220px] h-[48px] text-white rounded-[16px] ">
            Push
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotificationForm;
