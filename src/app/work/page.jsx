import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import Link from "next/link";
import Image from "next/image";
import I1 from "../../../public/images/Music/Dell.jpeg";
import I2 from "../../../public/images/Music/Music.jpg";
import I3 from "../../../public/images/Music/Jacket.jpg";
import I4 from "../../../public/images/Music/03.jpg";

const work = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='lg:h-screen h-[50vh] pt-20 lg:pt-0 flex flex-col justify-center  px-8 gap-4  '>
               <h1 className='lg:leading-[2.8vm]  lg:w-[90%] lg:font-semibold lg:text-[2.2vw] text-2xl lg:px-8 lg:font-[Rmneue, snas-serif]'>
                  I’m Madan, a UI/UX Designer.
               </h1>
               <p className=' text-[#929292] lg:w-[70%] font-normal text-xl lg:px-8 lg:text-4xl font-[Rmneue, snas-serif]'>
                  I enjoy crafting user-centric, delightful, and human-centered experiences that resonate with users. My focus is on
                  creating designs that are not only visually appealing but also intuitive and functional.
               </p>
            </div>
            <div className='lg:min-h-screen lg:gap-8 gap-4 grid lg:grid-cols-2 px-8 lg:px-0 justify-items-center py-8'>
               <div className='relative lg:w-fit'>
                  <Link href={"/nustart"} className='relative  group '>
                     <Image
                        src={I1}
                        width={800}
                        height={1000}
                        alt='Home'
                        className='opacity-[9.50] group-hover:opacity-100 transition-opacity ease-in-out duration-1000'
                     />
                     <div className='absolute flex justify-between top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-white font-bold text-2xl font-[Rmneue, sans-serif]'>Resume Builder</h1>
                     </div>
                     <div className='absolute flex justify-between bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-white font-bold text-2xl font-[Rmneue, sans-serif]'>
                           Zidio Development - 2024
                        </h1>
                     </div>
                  </Link>
               </div>
               <div className='relative w-fit'>
                  <Link href={"/productdesigner"} className='relative block group'>
                     <Image
                        src={I2}
                        width={800}
                        height={1000}
                        alt='Home'
                        className='opacity-95 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'
                     />
                     <div className='absolute flex justify-between top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-white font-bold text-2xl font-[Rmneue, sans-serif]'>Music Player</h1>
                     </div>
                     <div className='absolute flex justify-between bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-white font-bold lg:text-2xl font-[Rmneue, sans-serif] lg:w-[80%]'>
                           Accenture North America Product Design - 2024
                        </h1>
                     </div>
                  </Link>
               </div>
               <div className='relative w-fit flex justify-center items-center'>
                  <Link href={"https://filmplex.vercel.app/"} target='_black' className='relative block group'>
                     <Image
                        src={I4}
                        width={800}
                        height={1000}
                        alt='Home'
                        className='opacity-95 group-hover:opacity-100 transition-opacity ease-in-out duration-1000 lg:h-[610px]'
                     />
                     <div className='absolute flex justify-between top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-white font-bold text-2xl font-[Rmneue, sans-serif]'>Filmplex Clone</h1>
                     </div>
                     <div className='absolute flex justify-between bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-white font-bold text-2xl font-[Rmneue, sans-serif] w-[80%]'>
                           College Project - 2023
                        </h1>
                     </div>
                  </Link>
               </div>
               <div className='relative w-fit'>
                  <Link href={"https://light-studio-ten.vercel.app/"} target='_black' className='relative block group'>
                     <Image
                        src={I3}
                        width={800}
                        height={1000}
                        alt='Home'
                        className='opacity-95 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'
                     />
                     <div className='absolute flex justify-between top-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-black font-bold text-2xl font-[Rmneue, sans-serif]'>
                           LightStudio Online Shopping
                        </h1>
                     </div>
                     <div className='absolute flex justify-between bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-1000'>
                        <h1 className='leading-[2.8vm] text-black font-bold text-2xl font-[Rmneue, sans-serif] w-[80%]'>
                           College Project - 2023
                        </h1>
                     </div>
                  </Link>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default work;
