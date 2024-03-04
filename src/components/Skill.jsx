import React from "react";
import ContentWrapper from "./ContentWrapper";
import { GiSkills } from "react-icons/gi";

const Skill = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='px-7 mt-20 uppercase text-3xl font-bold flex items-center gap-2'>
               <GiSkills size={40} className=' text-white/40' /> Skills
            </div>
            <div className=' grid md:grid-cols-4 grid-cols-2 px-7 mt-8 gap-8 uppercase'>
               <div className='flex flex-col items-center bg-[#2a2e35] py-4 rounded cursor-pointer hover:shadow-lg hover:shadow-[#e44d26] transition-all duration-300 ease-in'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' className='w-[100px]' />
                  <p>Html</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] py-4 rounded cursor-pointer hover:shadow-lg hover:shadow-[#1572b6] transition-all duration-300 ease-in'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' className='w-[100px]' />
                  <p>Css</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] py-4 rounded cursor-pointer hover:shadow-lg hover:shadow-[#38b2ac] transition-all duration-300 ease-in'>
                  <img
                     src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
                     className='w-[100px]'
                  />
                  <p>TailwindCss</p>
               </div>
               <div className='flex flex-col items-center  cursor-pointer bg-[#2a2e35] py-4 rounded hover:shadow-lg hover:shadow-[#f0db4f] transition-all duration-300 ease-in'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' className='w-[100px]' />
                  <p>javascript</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] py-4 rounded cursor-pointer hover:shadow-lg hover:shadow-[#61dafb] transition-all duration-300 ease-in'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' className='w-[100px]' />
                  <p>React js</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] py-4 rounded cursor-pointer hover:shadow-lg hover:shadow-[#2a2e35] transition-all duration-300 ease-in'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' className='w-[100px]' />
                  <p>Next js</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] py-4 rounded cursor-pointe hover:shadow-lg hover:shadow-[#764abc] transition-all duration-300 ease-inr'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' className='w-[100px]' />
                  <p>Redux</p>
               </div>
               <div className='flex flex-col items-center bg-[#2a2e35] py-4 rounded cursor-pointer hover:shadow-lg hover:shadow-[#181616] transition-all duration-300 ease-in'>
                  <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' className='w-[100px]' />
                  <p>Github</p>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Skill;
