import React from "react";
import { IconCat, IconDog } from "../../../../assets/export";
import { LuTrash } from "react-icons/lu";
const pets = [
  {
    name: "Bella",
    type: "Golden Retriever",
    age: "1.3 Yrs",
    image: IconDog,
  },
  {
    name: "Whiskers",
    type: "Maine Coon",
    age: "1.6 Yrs",
    image: IconCat,
  },
];

const PetProfile = () => {
  return (
    <div>
      <div className="flex flex-wrap  gap-4">
        {pets.map((pet, idx) => (
          <div
            key={idx}
            className="bg-[#c7d9df] backdrop-blur rounded-[20px] h-[80px] px-4 py-3 flex items-center justify-center gap-4 shadow-sm w-full max-w-xs"
          >
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-b from-[#10C0B6] to-[#684D7B] flex items-center justify-center">
              <img src={pet.image} className="w-[27px] h-[27px] " alt="" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-sm">{pet.name}</p>
              <p className="text-[14px] text-[#565656] font-[500] ">
                {pet.type} {pet.age}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetProfile;
