import React from "react";
import Image from "next/image";
import ContentWrapper from "@/components/ContentWrapper";
import I1 from "../../../public/images/low/Landing Page.png";
import I2 from "../../../public/images/low/Sign in Account.png";
import I3 from "../../../public/images/low/Create your account.png";
import I4 from "../../../public/images/low/Dashboard.png";
import I5 from "../../../public/images/low/Ats Resume Guide page.png";
import I6 from "../../../public/images/low/ATS resume page.png";
import I7 from "../../../public/images/low/Help & support.png";
import I8 from "../../../public/images/low/Contact us.png";
import I9 from "../../../public/images/low/feedback.png";
import I10 from "../../../public/images/low/Edit Profile.png";
import I11 from "../../../public/images/low/New Resume.png";
import I12 from "../../../public/images/low/Templates.png";
import I13 from "../../../public/images/low/Perimium.png";
import I14 from "../../../public/images/low/Billing.png";
import I15 from "../../../public/images/low/Payment.png";
import I16 from "../../../public/images/low/Payment opt page.png";
import I17 from "../../../public/images/low/Heading Details.png";
import I18 from "../../../public/images/low/Summary Details.png";
import I19 from "../../../public/images/low/Skills Details.png";
import I20 from "../../../public/images/low/Work Details.png";
import I21 from "../../../public/images/low/Education Details.png";
import I22 from "../../../public/images/low/Others Details.png";
import I23 from "../../../public/images/low/In other language selected Details.png";
import I24 from "../../../public/images/low/Final Resume Page.png";
import I25 from "../../../public/images/low/Final Resume font style page.png";
import I26 from "../../../public/images/low/Final template in Page.png";

const lowfidelity = () => {
   return (
      <div>
         <ContentWrapper>
            <div>
               <h1 className='font-{Dennis Sans, sans-serif} -tracking-[0.26vw] lg:w-full font-normal lg:text-[5.2vw] text-2xl lg:leading-[6.3vw] pt-28 px-8'>
                  Low-Fidelity
               </h1>
            </div>
            <div className='lg:flex gap-8 px-4 justify-center items-center justify-items-center'>
               <div className='mb-4 flex flex-col gap-8'>
                  <Image src={I1} width={500} height={500} alt='image' />
                  <Image src={I10} width={500} height={500} alt='image' />
                  <Image src={I17} width={500} height={500} alt='image' />
                  <Image src={I18} width={500} height={500} alt='image' />
                  <Image src={I19} width={500} height={500} alt='image' />
                  <Image src={I20} width={500} height={500} alt='image' />
                  <Image src={I21} width={500} height={500} alt='image' />
               </div>
               <div>
                  <div className='grid grid-cols-2 gap-4'>
                     <Image src={I2} width={500} height={500} alt='image' />
                     <Image src={I3} width={500} height={500} alt='image' />
                     <Image src={I4} width={500} height={500} alt='image' />
                     <Image src={I5} width={500} height={500} alt='image' />
                     <Image src={I6} width={500} height={500} alt='image' />
                     <Image src={I7} width={500} height={500} alt='image' />
                     <Image src={I8} width={500} height={500} alt='image' />
                     <Image src={I9} width={500} height={500} alt='image' />
                     <Image src={I10} width={500} height={500} alt='image' />
                     <Image src={I11} width={500} height={500} alt='image' />
                     <Image src={I12} width={500} height={500} alt='image' />
                     <Image src={I13} width={500} height={500} alt='image' />
                     <Image src={I14} width={500} height={500} alt='image' />
                     <Image src={I15} width={500} height={500} alt='image' />
                     <Image src={I16} width={500} height={500} alt='image' />
                     <Image src={I22} width={500} height={500} alt='image' />
                     <Image src={I23} width={500} height={500} alt='image' />
                     <Image src={I24} width={500} height={500} alt='image' />
                     <Image src={I25} width={500} height={500} alt='image' />
                     <Image src={I26} width={500} height={500} alt='image' />
                  </div>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};
export default lowfidelity;
