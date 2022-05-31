import React from "react";
import Search from "../assets/Search.svg";
import Image from "next/image";
import Location from "../assets/Location.svg";

const SearchInput = () => {
  return (
    <div className="w-full flex bg-white rounded-full h-[60px] items-center p-6 gap-5">
      <div className="flex items-center gap-4 ">
        <span className="w-[30px] h-[30px] ">
          <Image src={Search} />
        </span>
        <input
          type="text"
          className="outline-none  py-1 font-poppins text-[18px] font-light"
          placeholder="Job Title or keyword"
        />
      </div>
      <div className="h-[42px] w-[4px] rounded-full bg-gray-300 "></div>
      <span className="">
        <Image src={Location} />
      </span>
      <input
        type="text"
        className="outline-none  py-1 font-poppins text-[18px] font-light"
        placeholder="Depok, Jawa Barat"
      />
      <button className="p-2 w-[150px] rounded-full bg-orange-500 font-poppins text-[18px] text-white font-bold">
        <h1>Search</h1>
      </button>
    </div>
  );
};

export default SearchInput;
