import React from "react";
import ContentWrapper from "@/components/ContentWrapper";

const prototype = () => {
   return (
      <div>
         <ContentWrapper>
            <div>
               <h1 className='font-[Dennis Sans, sans-serif]  font-normal text-2xl  pt-20 px-8 '>Prototype</h1>
               <div className='w-full h-[100vh] overflow-hidden'>
                  <iframe
                     width='100%'
                     height='100%'
                     src='https://embed.figma.com/proto/Es9uAQxePNWHpd85b87ihq/NuStart?page-id=1169%3A4320&node-id=1350-5295&p=f&viewport=1491%2C497%2C0.03&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1350%3A5157&embed-host=share&hide-ui=1'
                     allowfullscreen
                     className='w-full h-full overflow-hidden border-none'
                  ></iframe>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default prototype;
