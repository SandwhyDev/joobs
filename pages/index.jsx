import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import Location from "../assets/Location.svg";
import Search from "../assets/Search.svg";
import ImageHero from "../assets/Image-herro.png";
import Slack from "../assets/slack.png";
import Microsoft from "../assets/microsoft.png";
import Google from "../assets/google.png";
import Airbnb from "../assets/airbnb.png";
import ImageHero2 from "../assets/ImageHero2.png";
import ImageHero3 from "../assets/ImageHero3.png";
import Subscribe from "../assets/Subcribe.png";
import Pattern from "../assets/Pattern.svg";
import CardCategories from "../components/CardCategories";
import Footer from "../components/Footer";
export default function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col  ">
      <Header />
      <div className="w-screen h-screen bg-[#F2994A]/25 py-5  flex flex-col gap-4 ">
        <Navbar />
        <div className="w-full h-full  mt-10  flex">
          <div className="w-full h-full  flex flex-col gap-4  px-10 ">
            <h1 className="font-poppins text-[80px] font-bold leading-[100px] ">
              Find the job of your{" "}
              <span className="text-orange-500">Dreams</span>
            </h1>
            <p className="text-[#4F4F4F] w-[90%] font-poppins text-[21px] font-light">
              Find You New Job Today! New Job Postings Everyday just for you,
              browse the job you want and apply wherever you want
            </p>
            <div className="w-full h-full  flex flex-col gap-[20px]">
              <h1 className="text-[#333333] w-[90%] font-poppins text-[25px] font-medium">
                Trending Jobs keyword :
              </h1>
              <div className="flex gap-[20px] text-[#F2994A] font-poppins text-[21px] font-bold ">
                <h1>Web Designer</h1>
                <h1>UI/UX Designer</h1>
                <h1>Frontend</h1>
              </div>

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
            </div>
          </div>
          <div className="w-full h-full  mr-3 ">
            <div className="w-full h-full  -mt-24 ">
              <Image src={ImageHero} />
            </div>
          </div>
        </div>
      </div>

      {/* PAGE 2  */}
      <div className="w-full h-auto bg-[#F2994A]/25   ">
        <div className="w-full h-[300px] bg-white flex flex-col items-center p-14 gap-2">
          <h1 className="font-poppins text-[24px] font-medium">
            Join Most Well Known{" "}
            <span className="text-[#F2994A]">Companies</span> Around The World
          </h1>
          <div className="w-full h-full  flex gap-4 items-center justify-between  ">
            <Image src={Slack} />
            <Image src={Microsoft} />
            <Image src={Google} />
            <Image src={Airbnb} />
          </div>
        </div>
      </div>

      {/* PAGE 3  */}
      <div className="W-screen h-screen bg-[#F2994A]/25 flex flex-col items-center px-[52px] py-20 gap-10">
        <div className="flex flex-col items-center  ">
          <p className="font-poppins text-[25.24px] font-medium text-[#F2994A] ">
            Choose Categories
          </p>
          <h1 className="font-poppins text-[46px] font-semibold ">
            Choose Categories
          </h1>
        </div>

        <div className="w-full h-full  flex flex-wrap gap-5 justify-between">
          <CardCategories />
          <CardCategories bg="true" />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
          <CardCategories />
        </div>
      </div>

      {/* PAGE 4  */}
      <div className="w-screen h-screen bg-[#F2994A]/25 flex  ">
        <div className="w-full h-[90%]   flex items-center justify-center">
          <Image src={ImageHero2} />
        </div>
        <div className="w-full h-full  flex flex-col  gap-5 py-24 pr-5 mr-10 ">
          <p className="text-[#F2994A] font-poppins font-medium text-[25px]">
            Create Profile
          </p>
          <h1 className="font-poppins font-semibold text-[46px] leading-[50px]">
            Build Your Personal <br /> Account Profile
          </h1>
          <p className=" font-poppins  text-[21px] font-light">
            Create an account for the job information you want, get daily
            notifications and you can easily apply directly to the company you
            want and create an account now for free
          </p>
          <button className="p-5 bg-[#F2994A] w-[170px]  rounded-[22px]   font-poppins  text-[16px] font-bold text-white">
            <h1>Create Account</h1>
          </button>
        </div>
      </div>

      {/* PAGE 5  */}
      <div className="w-screen h-screen bg-[#F2994A]/25 flex   ">
        <div className="w-full h-full  flex flex-col  gap-4 py-10 px-5  pr-5 ml-10 ">
          <p className="text-[#F2994A] font-poppins font-medium text-[25px]">
            How It Works
          </p>
          <h1 className="font-poppins font-semibold text-[46px] leading-[50px]">
            Easy Step To Find and Apply Your Dream Job
          </h1>
          <p className=" font-poppins  text-[21px] font-light w-[90%]">
            We will help you to find your dream job easily, let us help you
            manage everything you need
          </p>

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
                Get notified about new job vacancies. scheduled interview and
                job application
              </p>
            </div>

            <div className="group flex flex-col  p-5 -mt-6 ">
              <p className="font-poppins  text-[20px] font-bold text-[#F2994A]">
                Apply for your dream job from the best company
              </p>
              <p className="font-poppins  text-[20px] font-light">
                We will provide recommendations for your choice companies from
                all over the world
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[600px]    flex items-center justify-center ">
          <Image src={ImageHero3} />
        </div>
      </div>

      {/* PAGE 6  */}
      <div className="w-screen h-auto bg-[#F2994A]/25 px-10 py-20 ">
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
      </div>

      {/* FOOTER  */}
      <Footer />
    </div>
  );
}
