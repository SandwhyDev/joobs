import React from "react";
import Image from "next/image";
import Load from "../assets/Load.png";
const CardCategories = ({ bg = false }) => {
  return (
    <div
      className={`" ${
        bg ? "bg-orange-500 text-white" : "bg-white"
      } w-[300px] h-[160px] rounded-[31.54px] py-[50px] px-5 gap-4 flex "`}
    >
      <div className="w-[50px] h-[50px]   flex items-start justify-start ">
        <Image src={Load} />
      </div>
      <div className="w-[100%]  flex flex-col -mt-2">
        <h1 className="font-poppins text-[21px] font-bold">
          Marketing & Communication
        </h1>
        <p
          className={`font-poppins font-medium text-[14px] ${
            bg ? "text-white/70" : "text-[#828282]"
          }`}
        >
          58 Jobs Available
        </p>
      </div>
    </div>
  );
};

export default CardCategories;
