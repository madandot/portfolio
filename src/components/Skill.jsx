import React from "react";
import ContentWrapper from "./ContentWrapper";
import { GiSkills } from "react-icons/gi";
import { MdJavascript } from "react-icons/md";
import { FaReact, FaGithub } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
const Skill = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='px-7 mt-20 uppercase md:text-5xl font-bold flex items-center gap-2'>
               <GiSkills size={40} className=' text-white/40' /> Skills
            </div>
            <div className=' grid grid-cols-4 px-7 mt-8 gap-y-8 uppercase'>
               <div className='flex flex-col items-center  cursor-pointer'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' className='w-[100px]' />
                  <p>javascript</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] mx-4 py-8 rounded cursor-pointer'>
                  <SiTypescript size={70} className='' />
                  <p>Typescript</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] mx-4 py-8 rounded cursor-pointer'>
                  <BiLogoTailwindCss size={70} className='' />
                  <p>TailwindCss</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] mx-4 py-8 rounded cursor-pointer'>
                  <BsFiletypeScss size={70} className='' />
                  <p>Scss</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] mx-4 py-8 rounded cursor-pointer'>
                  <FaReact size={70} className='' />
                  <p>React js</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] mx-4 py-8 rounded cursor-pointer'>
                  <TbBrandNextjs size={70} className='' />
                  <p>Next js</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] mx-4 py-8 rounded cursor-pointer'>
                  <TbBrandRedux size={70} className='' />
                  <p>Redux</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] mx-4 py-8 rounded cursor-pointer'>
                  <FaGithub size={70} className='' />
                  <p>Git</p>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Skill;
