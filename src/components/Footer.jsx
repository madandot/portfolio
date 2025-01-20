"use client";
import React from "react";
import Link from "next/link";
import ContentWrapper from "./ContentWrapper";

const Footer = () => {
   return (
      <div>
         <ContentWrapper>
            <div className=' px-8 py-8 flex gap-8 items-center justify-around'>
               <div className=''>
                  <Link href={"/work"} className='text-white font-sans text-[21px] font-light leading-6 underline'>
                     Madan HanumanthReddy
                  </Link>
               </div>
               <div>
                  <h1 className='text-gray-500 font-sans text-[21px] font-bold leading-6'>Lets Chat</h1>
                  <Link
                     href={"mailto:reddymadan0512@gmail.com"}
                     className='text-white font-sans text-[21px] font-light leading-6 underline'
                  >
                     hello at Madan
                  </Link>
               </div>
               <div>
                  <div>
                     <h1 className='text-gray-500 font-sans text-[21px] font-bold leading-6'>UI / UX Designer</h1>
                  </div>
               </div>
               <div>
                  <div>
                     <p className='text-white font-sans text-[21px] font-light leading-6  pb-1'>HTML</p>
                     <p className='text-white font-sans text-[21px] font-light leading-6  pb-1'>CSS</p>
                     <p className='text-white font-sans text-[21px] font-light leading-6  pb-1'>TailwindCss</p>
                     <p className='text-white font-sans text-[21px] font-light leading-6  pb-1'>React Js</p>
                  </div>
               </div>
               <div className='flex flex-col gap-4'>
                  <Link href={"/resume"} className='text-white font-sans text-[21px] font-light leading-6 underline'>
                     Resume
                  </Link>
                  <Link
                     href={"https://www.linkedin.com/in/madan-h-b42195334/"}
                     target='_blank'
                     className='text-white font-sans text-[21px] font-light leading-6 underline'
                  >
                     LinkedIn
                  </Link>
                  <Link
                     href={"https://github.com/madandot"}
                     target='_blank'
                     className='text-white font-sans text-[21px] font-light leading-6 underline'
                  >
                     GitHub
                  </Link>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Footer;
