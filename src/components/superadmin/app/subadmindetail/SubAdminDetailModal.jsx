import React from "react";
import { RxCross2 } from "react-icons/rx";
import GlobalInputs from "../../../global/GlobalInputs";
import PhoneInputs from "../../../global/PhoneInput";
import { phoneFormater } from "../../../../lib/helpers";
import GlobalButton from "../../../global/GlobalButton";

const SubAdminDetailModal = ({
  isOpen,
  onClose,
  values,
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
  updateLoading,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-gradient-to-br from-[#A0E6E1] to-[#C3B4D3] rounded-2xl w-[471px] max-w-xl p-6 shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between border-b border-[#FFFFFF] pb-2">
          <h2 className="text-[18px] font-[600] text-[#212121] mb-2">
            Admin Info
          </h2>
          <button
            onClick={onClose}
            className="h-[36px] bg-white w-[36px] flex justify-center items-center rounded-full text-xl font-bold text-gray-700 hover:text-black"
          >
            <RxCross2 />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 mt-4">
          <GlobalInputs
            placeholder="Sub Admin Name"
            value={values.name}
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
            max={50}
          />
          <GlobalInputs
            placeholder="Email"
            value={values.email}
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
            max={50}
            disabled
          />
          <PhoneInputs
            id="phone"
            name="phone"
            value={phoneFormater(values.phone)}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.phone}
            touched={touched.phone}
          />
          <GlobalButton loading={updateLoading} children={"Update"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SubAdminDetailModal;
