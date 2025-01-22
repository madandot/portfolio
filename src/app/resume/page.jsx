"use client";
import ContentWrapper from "@/components/ContentWrapper";
import React from "react";
import { CiSaveDown1 } from "react-icons/ci";

const Resume = () => {
   const handleDownload = () => {
      const fileUrl = "https://drive.google.com/file/d/1QjI3-vTkHSv4oMJDBTlhNULsh7m9YLje/view?usp=sharing";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank"; // Set the target to _blank to open in a new tab
      link.click(); // Programmatically trigger the click on the link
   };
   return (
      <div>
         <ContentWrapper>
            <div className='h-[82vh] flex justify-center items-center'>
               <button
                  className='mt-8 flex  items-center gap-x-2 px-4 py-4 text-white rounded font-medium text-xl border-[3px] border-[#483c32] hover:shadow-md hover:shadow-[#ffecd1]
                   transition-all duration-500 ease-in'
                  onClick={handleDownload}
               >
                  Resume
                  <CiSaveDown1 size={25} />
               </button>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Resume;
