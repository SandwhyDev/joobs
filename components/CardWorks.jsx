import React from "react";

const CardWorks = () => {
  return (
    <div className="w-[558px] bg-white rounded-[31px] flex flex-col -gap-[120px] ">
      <div className="group flex flex-col p-5">
        <p className="font-poppins  text-[20px] font-bold text-[#F2994A]">
          Easy to uload Your Best CV and Portofolio
        </p>
        <p className="font-poppins  text-[20px] font-light">
          You can upload your resume, CV, and portofolio directly to Jobbb
        </p>
      </div>

      <div className="group flex flex-col  p-5 -mt-6 ">
        <p className="font-poppins  text-[20px] font-bold text-[#F2994A]">
          You Will Be Notified With All Updates
        </p>
        <p className="font-poppins  text-[20px] font-light">
          Get notified about new job vacancies. scheduled interview and job
          application
        </p>
      </div>

      <div className="group flex flex-col  p-5 -mt-6 ">
        <p className="font-poppins  text-[20px] font-bold text-[#F2994A]">
          Apply for your dream job from the best company
        </p>
        <p className="font-poppins  text-[20px] font-light">
          We will provide recommendations for your choice companies from all
          over the world
        </p>
      </div>
    </div>
  );
};

export default CardWorks;
