"use client";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { IoIosArrowRoundDown } from "react-icons/io";
import Image from "next/image";
import I1 from "../../public/images/Home.jpeg";

const Skill = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='flex justify-between items-center bg-white text-black w-full '>
               <div className=' text-[16vw] font-normal font-{Dennis Sans, sans-serif} animate-slide-up '>Start</div>
               <div>
                  <IoIosArrowRoundDown size={250} className='animate-slide-up icon hidden md:flex' />
                  <IoIosArrowRoundDown size={50} className='animate-slide-up icon md:hidden flex' />
               </div>
            </div>
            <div className='bg-white text-black flex justify-between items-center h-screen'>
               <div>one</div>
               <div>
                  <Image src={I1} width={800} height={927} />
               </div>
            </div>
         </ContentWrapper>
         <style jsx>{`
            /* Animation for location button */
            @keyframes slideUp {
               0% {
                  transform: translateY(20px);
                  opacity: 0;
               }
               100% {
                  transform: translateY(0);
                  opacity: 1;
               }
            }
            .animate-slide-up {
               animation: slideUp 1.5s ease-out;
            }
         `}</style>
      </div>
   );
};

export default Skill;
