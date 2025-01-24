import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import Link from "next/link";

const prototype = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='flex justify-center items-center h-screen '>
               <div>
                  <Link
                     className='text-6xl font-sans font-semibold'
                     target='_black'
                     href={
                        "https://www.figma.com/proto/Es9uAQxePNWHpd85b87ihq/NuStart?page-id=1169%3A4320&node-id=1350-5295&p=f&viewport=815%2C295%2C0.02&t=ydXmRjk8jHBD2OVY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1350%3A5157"
                     }
                  >
                     Prototype
                  </Link>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default prototype;
