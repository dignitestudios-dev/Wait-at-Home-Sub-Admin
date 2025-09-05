import React from "react";
import { IconCat, IconDog } from "../../../../assets/export";

const PetProfile = ({ data }) => {
  return (
    <div>
      {data?.pets && data.pets.length > 0 ? (
        <div className="flex flex-wrap gap-4">
          {data.pets.map((pet, idx) => (
            <div
              key={idx}
              className="bg-[#c7d9df] backdrop-blur rounded-[20px] h-[80px] px-4 py-3 flex items-center justify-center gap-4 shadow-sm w-full max-w-xs"
            >
              <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[#10C0B6] to-[#684D7B] flex items-center justify-center">
                <img
                  src={pet.petType === "cat" ? IconCat : IconDog}
                  className="w-[27px] h-[27px]"
                  alt={pet.petType}
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 text-sm">
                  {pet.petName}
                </p>
                <p className="text-[14px] text-[#565656] font-[500]">
                  {pet.petType} {pet.petAge} Yrs
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          No pets found.
        </div>
      )}
    </div>
  );
};

export default PetProfile;
