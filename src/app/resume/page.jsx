"use client";
import ContentWrapper from "@/components/ContentWrapper";
import React from "react";
import { CiSaveDown1 } from "react-icons/ci";

const Resume = () => {
   const handleDownload = () => {
      const fileUrl = "https://drive.google.com/file/d/1PmbduuRkEG60SQSecxunoR76-dM-rIrt/view?usp=drive_link";
      const link = document.createElement("a");
      link.href = fileUrl;
      link.target = "_blank"; // Set the target to _blank to open in a new tab
      link.click(); // Programmatically trigger the click on the link
   };
   return (
      <div>
         <ContentWrapper>
            <div className='pt-20 px-7'>
               <div className='text-center md:text-7xl font-bold uppercase'>
                  <h1>Resume</h1>
                  <div className='w-36 h-4 flex justify-center items-center mx-auto border-b-4 border-green-500 rounded '></div>
               </div>
               <button
                  className='mt-8 flex  items-center gap-x-2 px-4 py-4 text-white rounded font-medium text-xl border-[3px] border-[#483c32] hover:shadow-md hover:shadow-[#ffecd1] transition-all duration-300 ease-in'
                  onClick={handleDownload}
               >
                  Resume
                  <CiSaveDown1 size={25} />
               </button>
               <div className='pt-8 px-8 bg-white text-black mt-4 rounded-sm'>
                  <div className='flex flex-col items-center justify-center'>
                     <h1 className='text-xl font-extrabold'>Madan HanumanthaReddy</h1>
                     <p>
                        +91 9606183114 | reddymadan0512@gmail.com |{" "}
                        <span
                           onClick={() => window.open("https://github.com/madandot", "_target")}
                           className='text-[#00fe87] cursor-pointer'
                        >
                           Github.com
                        </span>
                     </p>
                  </div>
                  <div className='py-2'>
                     <h1 className='text-xl font-bold pb-2'>Objective :</h1>
                     <p>
                        Passionate BCA graduate with a strong focus on front-end development, seeking opportunities to apply expertise in
                        HTML, CSS, Tailwind CSS, JavaScript, and React.js. Dedicated to crafting seamless and innovative user experiences, I
                        aim to contribute to the creation of dynamic and user-friendly web applications, leveraging my skills in responsive
                        design and UI/UX principles.
                     </p>
                  </div>
                  <div className='py-2'>
                     <h1 className='text-xl font-bold pb-2'>Education :</h1>
                     <div>
                        <div>
                           SSLC <br /> Sahana English Medium High School <br /> Kotagudda <br /> April 2016
                        </div>
                        <div>
                           Pre-University Course <br /> BGS PU College <br /> Chikkaballapur <br /> March 2018
                        </div>
                        <div>
                           Bachelor of Computer Applications (BCA) <br /> Administrative Management College <br /> Bangalore <br /> Aug 2023
                        </div>
                     </div>
                  </div>
                  <div className='py-2'>
                     <h1 className='text-xl font-bold pb-2'>Technical Skills :</h1>
                     <p>
                        • Proficient in HTML, CSS, and JavaScript, creating responsive and visually appealing web pages. <br /> • Experience
                        with the Tailwind CSS framework for efficient styling and layout design. <br /> • Familiarity with React.js,
                        building interactive and dynamic user interfaces. <br /> • Solid understanding of front-end development principles
                        and best practices.
                     </p>
                  </div>
                  <div className='py-2'>
                     <h1 className='text-xl font-bold pb-2'>Projects :</h1>
                     <p>
                        1. <b className='text-[#00fe87] cursor-pointer'>FILMPLEX</b> <br />• Developed a robust website utilizing
                        TMDB&apos;s REST API with React for the frontend, enhancing user interaction and experience. <br />• Implemented
                        global search functionality, empowering users to discover TV shows and movies effortlessly. <br />• Technologies:
                        JavaScript, React, TMDB API, React-Redux, Tailwind CSS. <br />
                        2. <b className='text-[#00fe87] cursor-pointer'> LIGHT STUDIO</b> <br />• Engineered an intuitive item listing
                        platform with advanced filtering and sorting capabilities, optimizing user navigation. <br />• Created
                        individualized item pages showcasing comprehensive details, enhancing user engagement and decision-making. <br />•
                        Technologies: JavaScript, TypeScript, React, Next.js, React-Redux, Tailwind CSS.
                     </p>
                  </div>
                  <div className='py-2'>
                     <h1 className='text-xl font-bold pb-2'>PERSONAL INFORMATION :</h1>
                     <p>
                        {" "}
                        <b> NATIONALITY</b> – Indian <br /> <b> LANGUAGES KNOWN</b> - English (Fluent), Kannada, and Telugu <br />
                        <b>ADDRESS</b> – Bangalore – Karnataka
                     </p>
                  </div>
                  <div className='py-2 text-center'>
                     <h1 className='text-xl font-bold pb-2'>DECLARATION</h1>
                     <p>
                        I hereby declare that all the information provided in this resume is true and accurate to the best of my knowledge.
                     </p>
                  </div>
                  <div className='py-2 text-right font-bold'>
                     <h1>[Madan HanumanthaReddy]</h1>
                  </div>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Resume;
