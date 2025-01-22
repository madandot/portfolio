"use Client";
import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import I1 from "../../../public/images/madan.jpg";

const info = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='flex justify-around  px-8 py-32'>
               <div className='pt-10'>
                  <p className='font-sans font-light text-2xl leading-6 text-[#ffffff80] '>
                     Hi, I’m Madan. I was raised in Katanakallu, and my childhood experiences shaped who I am today.
                  </p>
               </div>
               <div>
                  <Image src={I1} width={500} height={500} alt='madan'></Image>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default info;
