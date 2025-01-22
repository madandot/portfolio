import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import I1 from "../../../public/images/certifications/google.PNG";
import I2 from "../../../public/images/certifications/Product_Design_Job_Simulation.PNG";
import I3 from "../../../public/images/certifications/udemy.PNG";
import I4 from "../../../public/images/certifications/zidio.PNG";

const certificate = () => {
   return (
      <div>
         <ContentWrapper>
            <div className=''>
               <div className='text-2xl font-bold  pt-20 px-8'>
                  <h1>_______Certificate</h1>
               </div>
               <div className='grid grid-cols-2 gap-4 px-8 justify-items-center py-8'>
                  <Image src={I1} width={800} height={800} alt='go' />
                  <Image src={I2} width={800} height={800} alt='go' />
                  <Image src={I3} width={800} height={800} alt='go' />
                  <Image src={I4} width={800} height={800} alt='go' />
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default certificate;
