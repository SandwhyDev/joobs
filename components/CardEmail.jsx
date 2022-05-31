import React from "react";
import Pattern from "../assets/Pattern.svg";
import Image from "next/image";

const CardEmail = () => {
  return (
    <div className="w-full h-auto bg-[#F2994A] rounded-[84.1px] items-center justify-center flex  ">
      <h1 className="font-poppins text-[46px] font-semibol text-white w-[60%] pl-14">
        Never Want to Miss Any Job News?
      </h1>
      <div className="w-[100%] h-full flex flex-col relative  ">
        <Image src={Pattern} />

        <div className="bg-white w-[80%] h-20 rounded-full flex gap-4 px-10 py-5 absolute top-[45%] right-[90px]">
          <input
            type="text"
            name="email"
            id="email"
            className="outline-none  w-[60%]   font-poppins text-[21px] font-light"
            placeholder="Enter your email address here..."
          />
          <div className="h-[42px] w-[4px] rounded-full bg-gray-300 "></div>
          <button className=" w-[200px] rounded-full bg-[#F2994A] font-poppins text-[18px] text-white font-bold">
            <h1>Search</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEmail;
