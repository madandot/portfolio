"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
const Footer = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='px-7 mt-20 mb-20 flex flex-col items-center justify-center'>
               <div>
                  <p className='flex items-center gap-2'>
                     Find an issue with this page?{" "}
                     <span
                        className='text-[#ea580c] flex items-center gap-2 cursor-pointer'
                        onClick={() => window.open("https://github.com/madandot/portfolio", "_target")}
                     >
                        Fix it on GitHub
                        <FaGithub />
                     </span>
                  </p>
               </div>
               <div className='flex flex-col md:flex-row items-center gap-1'>
                  Created with{" "}
                  <span className='text-[#00fe87]'>
                     Next Js <span className='text-white'>and</span> TailwindCss
                  </span>
                  by{" "}
                  <span onClick={() => window.open("https://github.com/madandot", "_target")} className='text-[#00fe87] cursor-pointer'>
                     Madan H
                  </span>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Footer;
