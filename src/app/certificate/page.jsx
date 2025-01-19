import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import I1 from "../../../public/images/jp.png";
const certificate = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='text-center md:text-xl font-bold uppercase pt-20'>
               <h1>Certificate</h1>
               <div className='w-20 flex justify-center items-center mx-auto border-b-4 border-green-500 rounded '></div>
            </div>
            <div className='flex items-center justify-center pt-8 mx-4'>
               <Image src={I1} width={500} height={500} alt='go' />
            </div>
         </ContentWrapper>
      </div>
   );
};

export default certificate;
