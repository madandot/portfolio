"use client";
import ContentWrapper from "@/components/ContentWrapper";
import React from "react";
import Image from "next/image";
import I1 from "../../../public/images/flim.png";
import I2 from "../../../public/images/light.png";
import I3 from "../../../public/images/iam2.png";
import I4 from "../../../public/images/gtp2.png";
import Link from "next/link";
const Project = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='pt-20 px-7'>
               <div className='text-center md:text-7xl font-bold uppercase mb-20'>
                  <h1>Projects</h1>
                  <div className='w-36 h-4 flex justify-center items-center mx-auto border-b-4 border-green-500 rounded '></div>
               </div>
               <div className=' grid md:grid-cols-2 gap-4'>
                  <div className='flex flex-col items-center justify-center bg-[#ffecd1]/10 py-2 px-2 w-fit rounded shadow-lg'>
                     <Image src={I1} width={500} height={500} />
                     <h1 className='text-2xl capitalize pt-4 text-white font-bold'>filmplex</h1>
                     <div className='flex flex-col md:flex-row items-center gap-2'>
                        <button
                           onClick={() => window.open("https://filmplex.vercel.app/", "_target")}
                           className='mt-4 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all
                          duration-500 ease-in'
                        >
                           Live Demo
                        </button>
                        <button
                           onClick={() => window.open("https://github.com/madandot/Filmplex", "_target")}
                           className='md:mt-4 mt-2 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all 
                         duration-500 ease-in'
                        >
                           View Source
                        </button>
                     </div>
                  </div>
                  <div className='flex flex-col items-center justify-center bg-[#ffecd1]/10 py-2 px-2 w-fit rounded shadow-lg'>
                     <Image src={I2} width={500} height={500} />
                     <h1 className='text-2xl capitalize pt-4 text-white font-bold'>LIGHT STUDIO</h1>
                     <div className='flex flex-col md:flex-row items-center gap-2'>
                        <button
                           onClick={() => window.open("https://light-studio-ten.vercel.app/", "_target")}
                           className='mt-4 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all
                          duration-500 ease-in'
                        >
                           Live Demo
                        </button>
                        <button
                           onClick={() => window.open("https://github.com/madandot/light-studio", "_target")}
                           className='md:mt-4 mt-2 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all 
                         duration-500 ease-in'
                        >
                           View Source
                        </button>
                     </div>
                  </div>
                  <div className='flex flex-col items-center justify-center bg-[#ffecd1]/10 py-2 px-2 w-fit rounded shadow-lg'>
                     <Image src={I3} width={500} height={500} />
                     <h1 className='text-2xl capitalize pt-4 text-white font-bold'>I AM DONE</h1>
                     <div className='flex flex-col md:flex-row items-center gap-2'>
                        <button
                           onClick={() => window.open("https://i-am-done.netlify.app/", "_target")}
                           className='mt-4 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all
                          duration-500 ease-in'
                        >
                           Live Demo
                        </button>
                        <Link
                           href={"/notfound"}
                           className='md:mt-4 mt-2 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all 
                         duration-500 ease-in'
                        >
                           View Source
                        </Link>
                     </div>
                  </div>
                  <div className='flex flex-col items-center justify-center bg-[#ffecd1]/10 py-2 px-2 w-fit rounded shadow-lg'>
                     <Image src={I4} width={500} height={500} />
                     <h1 className='text-2xl capitalize pt-4 text-white font-bold'>gpt-3</h1>
                     <div className='flex flex-col md:flex-row items-center gap-2'>
                        <button
                           onClick={() => window.open("https://react-project-theta-rose.vercel.app/", "_target")}
                           className='mt-4 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all
                          duration-500 ease-in'
                        >
                           Live Demo
                        </button>
                        <button
                           onClick={() => window.open("https://github.com/madandot/react-project", "_target")}
                           className='md:mt-4 mt-2 flex items-center gap-x-2 px-3 py-3 text-white rounded font-normal text-xl border-[3px]
                         border-[#483c32] hover:border-[#ffecd1] bg-black/10 hover:bg-[#ffecd1] hover:text-[#483c32] transition-all 
                         duration-500 ease-in'
                        >
                           View Source
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Project;
