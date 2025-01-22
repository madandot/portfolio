import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import I1 from "../../../public/images/Music/musk.jpg";
import I2 from "../../../public/images/Music/iPhone 15 Pro.png";
import I3 from "../../../public/images/Music/02.png";

const productdesigner = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='bg-white text-black'>
               <div className='min-h-screen max-w-7xl mx-auto px-2 lg:px-0'>
                  <div className='flex justify-center items-center py-32 '>
                     <Image src={I1} width={500} height={500} alt='home' className=' rounded shadow-2xl'></Image>
                  </div>
                  <div className='py-8'>
                     <div className='flex justify-between border-t-2  border-b-2 border-black/50 font-{Dennis Sans, sans-serif} py-4 text-2xl text-[#27153e] '>
                        <div>
                           <h1>02</h1>
                        </div>
                        <div>
                           <h2>Task Brief</h2>
                        </div>
                     </div>
                     <div className='md:grid grid-flow-col grid-rows-2 gap-8 justify-between font-{Dennis Sans, sans-serif} py-4 text-lg border-b-2 border-[#00000090]'>
                        <div>
                           <div className='md:pt-0 pt-4 text-[#27153e]'>Project Name</div>
                           <div className='text-[#00000090] pt-4 font-normal text-lg'>
                              LyricSync Integration for
                              <br /> Musik
                           </div>
                        </div>
                        <div>
                           <div className='md:pt-0 pt-4 text-[#27153e]'>Project timeline</div>
                           <div className='text-[#00000090] pt-4 font-normal text-lg'>November 2024</div>
                        </div>
                        <div>
                           <div className='md:pt-0 pt-4 text-[#27153e]'>Project Type</div>
                           <div className='text-[#00000090] pt-4 font-normal text-lg'>
                              Feature Enhancement for a <br /> Mobile Music Application
                           </div>
                        </div>
                        <div>
                           <div className='md:pt-0 pt-4 text-[#27153e]'>My Contribution</div>
                           <div className='text-[#00000090] pt-4 font-normal text-lg'>UX Research</div>
                           <div className='text-[#00000090] pt-1 font-normal text-lg'>Product Designer</div>
                        </div>
                        <div>
                           <div className='md:pt-0 pt-4 text-[#27153e]'>Tools</div>
                           <div className='text-[#00000090] pt-4 font-normal text-lg'>Figma</div>
                        </div>
                     </div>
                     <div className='border-b-2 border-black/50 my-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           The Problem
                        </h1>
                        <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                           Users of the Musik app currently lack the ability to view song lyrics, which diminishes their overall music
                           listening experience. This missing feature impacts user engagement and weakens the apps competitive position in
                           the market. To enhance satisfaction and provide a more immersive experience, it is crucial to integrate a
                           user-friendly lyrics display feature that seamlessly aligns with the apps existing design and functionality.
                        </p>
                     </div>
                     <div className='border-b-2 border-black/50 my-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Target audience
                        </h1>
                        <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                           Young adults aged 16 to 21 years who primarily use iPhones for their music listening experience.
                        </p>
                     </div>
                     <div className='border-b-2 border-black/50 my-2 py-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Previous design
                        </h1>
                        <div className='flex'>
                           <Image src={I3} width={500} height={500} alt='home'></Image>
                           <p>Current design as it stands today</p>
                        </div>
                     </div>
                     <div className='border-b-2 border-black/50 my-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           My Process
                        </h1>
                        <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                           Users of the Musik app currently lack the ability to view song lyrics, which diminishes their overall music
                           listening experience. This missing feature impacts user engagement and weakens the apps competitive position in
                           the market. To enhance satisfaction and provide a more immersive experience, it is crucial to integrate a
                           user-friendly lyrics display feature that seamlessly aligns with the apps existing design and functionality.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default productdesigner;
