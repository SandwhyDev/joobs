import React from "react";
import Logo from "../assets/Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-screen h-[429px] bg-white p-14 flex flex-col justify-between  ">
      <div className="w-full flex">
        <div className="w-[30%] h-full  flex flex-col gap-[29px] ">
          <div className="w-full ">
            <Image src={Logo} />
          </div>
          <p className="text-[16.82px] font-poppins font-light w-[85%] ">
            Joobs is the largest talent platform in Southeast Asia and Taiwan
            for career development and recruitment.
          </p>
        </div>
        <div className="w-[70%] h-full  flex justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="font-poppins text-[21px] font-bold capitalize">
              Employer
            </h1>
            <p className="font-poppins text-[16px] font-medium capitalize">
              about us
            </p>

            <p className="font-poppins text-[16px] font-medium capitalize">
              careers
            </p>

            <p className="font-poppins text-[16px] font-medium capitalize">
              blog
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="font-poppins text-[21px] font-bold capitalize">
              Find Vacancy Based On
            </h1>
            <p className="font-poppins text-[16px] font-medium capitalize">
              Help Center
            </p>

            <p className="font-poppins text-[16px] font-medium capitalize">
              Job Location
            </p>

            <p className="font-poppins text-[16px] font-medium capitalize">
              Company Name
            </p>
          </div>

          <div className="flex flex-col gap-5  w-[40%]">
            <h1 className="font-poppins text-[21px] font-bold capitalize">
              Address
            </h1>
            <p className="font-poppins text-[16px] font-medium capitalize">
              sandyiswahyudi@jobbb.com
            </p>

            <p className="font-poppins text-[16px] font-medium capitalize  ">
              JL. bbd raya Blok B1 No. 91 mekarsari, depok West Java, Indonesia
            </p>

            {/* <p className="font-poppins text-[16px] font-medium capitalize">
              blog
            </p> */}
          </div>
        </div>
      </div>
      <p className="text-center font-poppins text-[16px] font-medium ">
        © 2022 Hazar Hamzah - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
