import ContentWrapper from "@/components/ContentWrapper";
import React from "react";

const Project = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='pt-20 px-7'>
               <div className='text-center md:text-7xl font-bold uppercase'>
                  <h1>Projects</h1>
                  <div className='w-36 h-4 flex justify-center items-center mx-auto border-b-4 border-green-500 rounded '></div>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Project;
