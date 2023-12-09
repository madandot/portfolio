"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { CiSaveDown1 } from "react-icons/ci";
import "../app/globals.css";
const HeroBanner = () => {
   const handleDownload = () => {
      const fileUrl = "https://drive.google.com/file/d/1mzEOIIba0IKIRgTLYCGkQKfJ6KHwdfPA/view?usp=sharing";

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
                  <h1 className='py-2 md:text-5xl text-3xl md:font-extrabold cursor-pointer '>HI, I AM MADAN H</h1>
                  <TypeAnimation
                     sequence={["WEB DEVELOPER", 1000, "", 1000]}
                     wrapper='span'
                     speed={10}
                     style={{ fontSize: "2em", display: "inline-block", color: "white" }}
                     className=' md:font-bold pt-4'
                     repeat={Infinity}
                  />
                  <p className=' md:font-medium text-white/50 md:text-2xl pt-4 md:w-[700px]'>
                     Passionate web developer dedicated to creating intuitive digital experiences. Strong design foundation with a knack for
                     translating complex ideas into engaging interfaces.
                  </p>

                  <button
                     className='mt-8 flex  items-center gap-x-4 px-8 py-4 bg-[#47bd8a] text-black rounded font-medium text-2xl border-4 border-[#47bd8a]'
                     onClick={handleDownload}
                  >
                     Resume
                     <CiSaveDown1 size={25} />
                  </button>
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
