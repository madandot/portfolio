import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import { FaCertificate } from "react-icons/fa";
import I1 from "../../public/images/jp.png";
const Jp = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='px-7 mt-12'>
               <div className='uppercase text-3xl font-bold flex items-center gap-2 mb-10'>
                  <FaCertificate size={40} className='text-white/40' />
                  <h1>certificate</h1>
               </div>
               <div className=''>
                  <Image src={I1} width={500} height={500} />
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Jp;
