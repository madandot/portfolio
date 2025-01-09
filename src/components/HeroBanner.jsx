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
      const fileUrl = "https://drive.google.com/file/d/1PmbduuRkEG60SQSecxunoR76-dM-rIrt/view?usp=drive_link";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank"; // Set the target to _blank to open in a new tab
      link.click(); // Programmatically trigger the click on the link
   };

   return (
      <div>
         <ContentWrapper>
            <div className=' px-7 flex md:flex-row flex-col-reverse gap-y-4 md:gap-y-0 justify-center items-center w-full md:h-[90vh] h-[50vh] '>
               <div>
                  <h5 className=' md:font-medium #FFFFFF text-center  md:text-[40px] pt-4 '>
                     Hi, <span className='text-green-500'>I'm Madan HanumanthaReddy.</span> I'm a designer who codes, driven by a passion
                     for crafting user-centric and delightful digital experiences that make life simpler for people.
                  </h5>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default HeroBanner;
