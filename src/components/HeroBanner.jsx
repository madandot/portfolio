"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { CiSaveDown1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../app/globals.css";
const HeroBanner = () => {
   const handleDownload = () => {
      const fileUrl = "https://drive.google.com/file/d/1DkIIkKI_BRRXNhfZVRkr-FmPkkpjYWcV/view?usp=sharing";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank"; // Set the target to _blank to open in a new tab
      link.click(); // Programmatically trigger the click on the link
   };

   return (
      <div>
         <ContentWrapper>
            <div className='pt-28 px-7 flex md:flex-row flex-col-reverse gap-y-4 md:gap-y-0 justify-between items-center w-full'>
               <div>
                  <h1 className='py-2 md:text-3xl text-3xl md:font-extrabold cursor-pointer capitalize '>Hi, I am Madan HanumanthaReddy</h1>
                  <TypeAnimation
                     sequence={["WEB DEVELOPER", 1000, "", 1000]}
                     wrapper='span'
                     speed={10}
                     className=' md:font-bold text-2xl pt-4 text-transparent bg-clip-text bg-gradient-to-l from-[#ffecd1] to-[#483c32]'
                     repeat={Infinity}
                  />
                  <p className=' md:font-medium text-white/50 md:text-xl pt-4 md:w-[700px]'>
                     Passionate web developer dedicated to creating intuitive digital experiences. Strong design foundation with a knack for
                     translating complex ideas into engaging interfaces.
                  </p>
                  <div className='flex items-center gap-2'>
                     <button
                        className='mt-8 flex  items-center gap-x-2 px-4 py-4 text-white rounded font-medium text-xl border-[3px] border-[#483c32] hover:shadow-md hover:shadow-[#ffecd1] transition-all duration-300 ease-in'
                        onClick={handleDownload}
                     >
                        Resume
                        <CiSaveDown1 size={25} />
                     </button>
                     <button
                        onClick={() => window.open("https://github.com/madandot", "_target")}
                        className='mt-8 flex  items-center gap-x-2  px-4 py-4  text-white rounded font-medium text-xl border-[3px] border-[#483c32] hover:shadow-md hover:shadow-[#ffecd1] transition-all duration-300 ease-in'
                     >
                        GitHub <FaGithub />
                     </button>
                  </div>
               </div>
               <div className='one'>
                  <Image src={"/images/HeroBanner.jpg"} width={500} height={500} className=' rounded' />
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default HeroBanner;
