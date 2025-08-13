import React from "react";
import { RxCross2 } from "react-icons/rx";
import GlobalInputs from "../../../global/GlobalInputs";
import { IoChevronDown } from "react-icons/io5";
import GlobalButton from "../../../global/GlobalButton";

const ViewPetDetailModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-gradient-to-br from-[#A0E6E1] to-[#C3B4D3] rounded-2xl w-[471px] max-w-xl p-6 shadow-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between border-b border-[#FFFFFF] pb-2">
          <h2 className="text-[18px] font-[600] text-[#212121] mb-2">
            Pet Details
          </h2>
          <button
            onClick={onClose}
            className="h-[36px] bg-white w-[36px] flex justify-center items-center rounded-full text-xl font-bold text-gray-700 hover:text-black"
          >
            <RxCross2 />
          </button>
        </div>

        <form className="space-y-3 mt-4">
          <GlobalInputs
            placeholder="Pet’s Name"
            value=""
            disabled
            type="text"
            name="petName"
            id="petName"
            error={null}
            touched={false}
            max={50}
          />

          <div className="relative w-full">
            <select
              name="petType"
              id="petType"
              disabled
              className="appearance-none bg-gray-100 cursor-not-allowed  w-full rounded-xl px-4 py-3 h-[49px] pr-10 text-[14px]  text-[#616161] border focus:border-[#10C0B6] focus:ring-2 focus:ring-[#10C0B6]"
            >
              <option value="">Pet Type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="rabbit">Rabbit</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#616161]">
              <IoChevronDown />
            </div>
          </div>

          <GlobalInputs
            disabled
            placeholder="Pet Breed"
            value=""
            type="text"
            name="petBreed"
            id="petBreed"
            error={null}
            touched={false}
            max={50}
          />

          <GlobalInputs
            disabled
            placeholder="Pet Age"
            value=""
            type="text"
            name="petAge"
            id="petAge"
            error={null}
            touched={false}
          />
          <textarea
            name=""
            disabled
            className="w-full bg-[#FFFFFF59] cursor-not-allowed  rounded-xl pr-11 px-4 py-3 mb-1 text-[14px] font-[400]  placeholder:text-[#616161] outline-none border transition"
            id=""
            placeholder="Symptoms or Reasons for the visit"
            rows={4}
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default ViewPetDetailModal;
