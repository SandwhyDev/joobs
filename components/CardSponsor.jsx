import React from "react";
import Slack from "../assets/slack.png";
import Microsoft from "../assets/microsoft.png";
import Google from "../assets/google.png";
import Airbnb from "../assets/airbnb.png";
import Image from "next/image";

const CardSponsor = () => {
  return (
    <div className="w-full h-full  flex gap-4 items-center justify-between  ">
      <Image src={Slack} />
      <Image src={Microsoft} />
      <Image src={Google} />
      <Image src={Airbnb} />
    </div>
  );
};

export default CardSponsor;
