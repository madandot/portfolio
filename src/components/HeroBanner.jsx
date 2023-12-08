"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='min-h-[900px] pt-96  '>
               <div>
                  <h1 className='py-2 text-5xl font-extrabold cursor-pointer bg-gradient-to-r from-white to-white bg-clip-text text-transparent animate-shine '>
                     HI, I AM MADAN H
                  </h1>
                  <TypeAnimation
                     sequence={["WEB DEVELOPER", 1000, "PROGRAMMER", 1000]}
                     wrapper='span'
                     speed={10}
                     style={{ fontSize: "2em", display: "inline-block", color: "white" }}
                     repeat={Infinity}
                  />
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default HeroBanner;
