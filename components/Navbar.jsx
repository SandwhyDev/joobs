import React from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full h-20  flex justify-between items-center px-10 ">
      <div className="brands w-[150px] h-full  flex items-center">
        <Image src={Logo} />
      </div>
      <div className="brands w-auto h-full  capitalize flex gap-[42px] items-center font-poppins text-[18px] font-medium">
        <h1 className="text-orange-500">Home</h1>
        <h1>employer</h1>
        <h1>candidate</h1>
      </div>
      <div className="brands w-[200px] h-full  flex gap-8 items-center font-poppins text-[18px] font-medium">
        <h1>Login</h1>
        <button className="h-[50px] bg-orange-500 w-[166px] font-poppins text-[18px] font-bold rounded-full text-white outline-none">
          Daftar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
