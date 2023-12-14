import ContentWrapper from "@/components/ContentWrapper";
import React from "react";

const NotFound = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='flex items-center justify-center h-screen my-auto text-2xl font-semibold'>
               <p>I am unable to provide the source code for this project.</p>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default NotFound;
