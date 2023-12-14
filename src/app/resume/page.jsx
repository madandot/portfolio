"use client";
import ContentWrapper from "@/components/ContentWrapper";
import React from "react";
import { CiSaveDown1 } from "react-icons/ci";

const Resume = () => {
   const handleDownload = () => {
      const fileUrl = "https://drive.google.com/file/d/1mzEOIIba0IKIRgTLYCGkQKfJ6KHwdfPA/view?usp=sharing";
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
                        Dedicated and enthusiastic BCA graduate with a passion for front-end development. Eager to leverage my skills in
                        <b> HTML,</b> <b>CSS,</b>
                        <b> Tailwind Css,</b> <b>JavaScript</b> and <b>React.js</b> to contribute to dynamic and user-friendly web
                        applications.
                     </p>
                  </div>
                  <div className='py-2'>
                     <h1 className='text-xl font-bold pb-2'>Education :</h1>
                     <p>
                        <b>SSLC</b> <br /> Sahana English Medium High School <br /> Kotagudda 2016 <br /> <b>Pre-University Course</b>{" "}
                        <br /> BGS PU College <br />
                        Chikkaballapur 2018 <br /> <b>Bachelor of Computer Applications (BCA)</b> <br /> Administrative Management College{" "}
                        <br /> Bangalore 2023
                     </p>
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
                        1. <b className='text-[#00fe87] cursor-pointer'>FILMPLEX</b> |{" "}
                        <b> Javascript, React, Tailwindcss, scss, React-redux, Vite</b> <br /> • Developed a website using The Movie
                        Database (TMDb) to serve as a REST API with React as the frontend. <br /> • Implemented global search functionality
                        that allows users to search for TV shows and movies. <br /> 2.{" "}
                        <b className='text-[#00fe87] cursor-pointer'>LIGHT STUDIO</b> |{" "}
                        <b>Javascript, Typescript, React, TailwindCss, React-Redux, Next js</b> <br /> • Implemented an items listing page
                        that enables users to filter and sort items in various ways. Users can also add items to their cart. <br /> •
                        Implemented an individual item page that displays all the information related to a specific item. <br />
                     </p>
                  </div>
                  <div className='py-2'>
                     <h1 className='text-xl font-bold pb-2'>PERSONAL INFORMATION :</h1>
                     <p>
                        {" "}
                        <b> NATIONALITY</b> – Indian <br /> <b> LANGUAGES KNOWN</b> - English[Fluent], Kannada, and Telugu <br />{" "}
                        <b>ADDRESS</b> – Bangalore – Karnataka{" "}
                     </p>
                  </div>
                  <div className='py-2 text-center'>
                     <h1 className='text-xl font-bold pb-2'>DECLARATION</h1>
                     <p>All above-mentioned information is are true to the best of my knowledge and belief.</p>
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
