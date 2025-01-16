"use client";
import React from "react";

import ContentWrapper from "./ContentWrapper";
import { IoIosArrowRoundDown } from "react-icons/io";
import Image from "next/image";
import I1 from "../../public/images/Home02.jpeg";
import I2 from "../../public/images/competitor analysis.png";
import I3 from "../../public/images/competitor analysis 02.png";
import { FaStar } from "react-icons/fa";

const Skill = () => {
   return (
      <>
         <ContentWrapper>
            <div className='flex justify-between items-center bg-black text-white w-full '>
               <div className=' text-[16vw] font-normal font-{Dennis Sans, sans-serif} animate-slide-up '>Start</div>
               <div>
                  <IoIosArrowRoundDown size={250} className='animate-slide-up icon hidden md:flex' />
                  <IoIosArrowRoundDown size={50} className='animate-slide-up icon md:hidden flex' />
               </div>
            </div>
            <div className='bg-black text-[#fff] flex justify-between px-8 gap-x-8 pb-10'>
               <div className='w-full'>
                  <div className='flex justify-between border-t-2  border-b-2 border-[#ffffff4d] font-{Dennis Sans, sans-serif} py-4 text-lg '>
                     <div>
                        <h1>01</h1>
                     </div>
                     <div>
                        <h2>Project Brief</h2>
                     </div>
                  </div>
                  <div className='md:grid grid-flow-col grid-rows-2 gap-8 justify-between font-{Dennis Sans, sans-serif} py-4 text-lg border-b-2 border-[#ffffff4d]'>
                     <div>
                        <div className='md:pt-0 pt-4'>Project Name</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>
                           Resume Building <br /> Website
                        </div>
                     </div>
                     <div>
                        <div className='md:pt-0 pt-4'>Project timeline</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>May - Aug 2024</div>
                     </div>
                     <div>
                        <div className='md:pt-0 pt-4'>Project Type</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>
                           Web Application, <br /> Utility Tool
                        </div>
                     </div>
                     <div>
                        <div className='md:pt-0 pt-4'>My Contribution</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>UX Research</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>UI / UX Design</div>
                     </div>
                     <div>
                        <div className='md:pt-0 pt-4'>Tools</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>Figma</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>Miro</div>
                     </div>
                  </div>
                  <div>
                     <h1 className='md:w-[400px] mt-5 font-{Dennis Sans, sans-serif} text-6xl font-normal leading-[70px] -tracking-[-1.3px] '>
                        Designing Tools to Build Better Futures
                     </h1>
                  </div>
                  <div>
                     <p className=' mt-5 text-xl font-light -tracking-[0.4px] leading-8'>
                        In today’s competitive job market, crafting a standout resume is more critical than ever. Many resume-building tools
                        complicate this process with rigid subscriptions, formatting issues, and overwhelming template choices. Our
                        platform, designed based on user feedback, offers an intuitive, user-friendly experience with ATS-optimized
                        templates and customizable designs. We’ve also simplified our subscription plans to provide greater flexibility for
                        users. A key feature, the intelligent word suggestion tool, helps users articulate their skills effectively. By
                        focusing on functionality and user empowerment, our platform enables job seekers to create polished, professional
                        resumes with ease.
                     </p>
                  </div>
               </div>
               <div className='w-full h-screen hidden lg:flex '>
                  <Image src={I1} width={800} height={500} className='w-full h-full object-cover rounded-lg' />
               </div>
            </div>
            <div className='bg-white text-black text-center lg:h-[40vh] items-center flex justify-center flex-col '>
               <div className='mt-5 font-{Dennis Sans, sans-serif} text-6xl font-normal leading-[70px] -tracking-[-1.3px] '>
                  HMW Statement
               </div>
               <div className=' mt-5 text-xl font-light -tracking-[0.4px] leading-8 lg:w-[800px]'>
                  How Met We help job seekers create standout, professional resumes easily and efficiently, while offering a flexible and
                  intuitive platform that caters to diverse user needs and skill levels?
               </div>
            </div>
            <div className='h-[100vh] flex  justify-center items-center gap-x-4 animate-slide-up'>
               <div className='font-{Dennis Sans, sans-serif} text-6xl font-semibold'>01 / </div>
               <div className='font-{Dennis Sans, sans-serif} lg:text-6xl font-normal'>
                  Chapter <br /> Research
               </div>
            </div>
            <div className=' text-black text-center py-8 bg-white'>
               <div className='font-{Dennis Sans, sans-serif} lg:text-6xl text-xl font-normal pb-10 capitalize'>
                  I conducted research in two phases
               </div>
               <div className='md:flex justify-around items-center gap-4 '>
                  <div className='lg:h-[50vh] h-[25vh] w-full bg-white hover:bg-slate-50  flex flex-col justify-center items-center text-center hover:shadow-2xl transition-colors duration-1000 ease-in-out cursor-pointer border-b-2 border-blue-700'>
                     <h1 className='font-{Dennis Sans, sans-serif} text-xl font-semibold'>Secondary Research </h1>
                     <p className='text-blue-600'>Competitor Analysis and User reviews</p>
                  </div>
                  <div className='lg:h-[50vh] h-[25vh] w-full bg-white hover:bg-slate-50 flex flex-col justify-center items-center text-center hover:shadow-2xl transition-colors duration-1000  ease-in-out cursor-pointer border-t-2 border-blue-700'>
                     <h1 className='font-{Dennis Sans, sans-serif} text-xl font-semibold'>Primary Research</h1>
                     <p className='text-blue-600'>User survey and user Interview</p>
                  </div>
               </div>
               <div className='md:px-10  py-10'>
                  <p className='text-center'>
                     To understand user frustrations and requirements, I conducted interviews with individuals from various industries. The
                     goal was to gain insights into their needs to better design a user-friendly resume-building platform. Initially, we
                     assumed users struggled with technical issues like formatting and ATS compatibility. However, the research revealed
                     broader concerns, such as complex subscription models and a preference for limited customization. Users sought
                     simplicity and flexibility, with a desire for curated templates tailored to specific roles. These findings shaped our
                     approach, emphasizing features that enhance the overall resume-building experience through simplicity and ease of use.
                  </p>
               </div>
            </div>
            <div className=' '>
               <div className='border-b-2 border-[#ffffff4d] py-4 '>
                  <div className='font-{Rmneue, sans-serif} lg:text-6xl text-2xl leading-[50px] px-8'>
                     {" "}
                     #01 <br />
                     Secondary Research
                  </div>
               </div>
               <div className='p-8'>
                  <div className='flex flex-col justify-start'>
                     <h1 className='font-{Dennis Sans, sans-serif} pt-4 lg:text-4xl text-2xl'>Competitor Analysis</h1>
                     <p className='text-[#ffffff90] py-8 font-normal text-lg'>
                        I conducted secondary research to gain deeper insights into existing products in the market, focusing on the key
                        features they offer and the challenges users face while using them. My market research began with four competitors:
                        Canva Resume Builder, Zety, Resume.io, and Novoresume. This analysis helped identify areas where my resume-building
                        platform could enhance its offerings and introduce new features. While these products have similar offerings, the
                        focus on limited customization and simplicity presents an opportunity for my platform to stand out and better meet
                        user needs.
                     </p>
                  </div>
                  <div class='pb-8 cursor-pointer lg:flex hidden'>
                     <table class='md:w-full border border-gray-300'>
                        <thead>
                           <tr class='bg-gray-100 text-center text-black'>
                              <th class='border border-gray-300 py-6'>Feature</th>
                              <th class='border border-gray-300 py-6'>Your Website</th>
                              <th class='border border-gray-300 py-6'>Canva Resume Builder</th>
                              <th class='border border-gray-300 py-6'>Zety</th>
                              <th class='border border-gray-300 py-6'>Resume.io</th>
                              <th class='border border-gray-300 py-6'>Novoresume</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr class='text-center'>
                              <td class='border border-gray-300 px-4 py-4'>Curated Templates</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                           </tr>
                           <tr class='text-center'>
                              <td class='border border-gray-300 px-4 py-4'>Limited Customization</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 bg-red-600'>No</td>
                              <td class='border border-gray-300 px-4 py-4 bg-red-600'>No</td>
                              <td class='border border-gray-300 px-4 py-4 bg-red-600'>No</td>
                              <td class='border border-gray-300 px-4 py-4 bg-red-600'>No</td>
                           </tr>
                           <tr class='text-center'>
                              <td class='border border-gray-300 px-4 py-4'>ATS Compatibility</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                           </tr>
                           <tr class='text-center'>
                              <td class='border border-gray-300 px-4 py-4'>Subscription Models</td>
                              <td class='border border-gray-300 px-4 py-4 bg-blue-600'>Simple</td>
                              <td class='border border-gray-300 px-4 py-4 bg-blue-600'>Complex</td>
                              <td class='border border-gray-300 px-4 py-4 bg-blue-600'>Complex</td>
                              <td class='border border-gray-300 px-4 py-4 bg-blue-600'>Complex</td>
                              <td class='border border-gray-300 px-4 py-4 bg-blue-600'>Complex</td>
                           </tr>
                           <tr class='text-center'>
                              <td class='border border-gray-300 px-4 py-4'>User-Friendly Design</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                           </tr>
                           <tr class='text-center'>
                              <td class='border border-gray-300 px-4 py-4'>Real-Time Preview</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                           </tr>
                           <tr class='text-center'>
                              <td class='border border-gray-300 px-4 py-4'>Keyword Suggestions</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 bg-red-600'>No</td>
                              <td class='border border-gray-300 px-4 py-4 bg-red-600'>No</td>
                              <td class='border border-gray-300 px-4 py-4 '>Yes</td>
                              <td class='border border-gray-300 px-4 py-4 bg-red-600'>No</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div className='w-full  lg:hidden flex '>
                     <Image src={I3} width={800} height={500} />
                  </div>
               </div>
               <div className='lg:flex justify-between items-end py-8 gap-8 px-8'>
                  <div>
                     <h1 className='font-{Dennis Sans, sans-serif} py-2 lg:text-4xl text-2xl text-[#ffff]'>User Reviews</h1>
                     <p className='text-[#ffffff90] py-4 font-normal text-lg'>
                        User Reviews I looked for user reviews on Play Store for different competitor apps to get more insights on user pain
                        points.
                     </p>
                  </div>
                  <div className='grid md:grid-cols-2 gap-4 justify-center items-center'>
                     <div className='bg-white text-black p-8 rounded'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-2xl text-lg font-medium p-2 text-blue-600'>
                           Paid subscriptions are not worth
                        </h1>
                        <div className='flex p-2'>
                           <FaStar size={20} className='text-yellow-500' />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <p className='pl-4'>08/06/2024</p>
                        </div>
                        <div>
                           <p className='p-2'>
                              The one thing I downloaded this app for is locked behind a paywall. Terrible. Something I am only going to use
                              once and not something I am going to use often, why would I waste my money. So pointless.
                           </p>
                        </div>
                     </div>
                     <div className='bg-white text-black p-8 rounded'>
                        <h1 className='font-{Dennis Sans, sans-serif} text-2xl font-medium p-2 text-blue-600'>Lack of ATS Compatibility</h1>
                        <div className='flex p-2'>
                           <FaStar size={20} className='text-yellow-500' />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <p className='pl-4'>08/06/2024</p>
                        </div>
                        <div>
                           <p className='p-2'>
                              The templates on Canva are creative, but they aren’t optimized for ATS, which is essential for my job search.
                              I spent hours designing my resume only to find out it wasn’t being seen by recruiters. Really frustrating. I
                              needed a tool that would provide more professional, ATS-friendly templates.
                           </p>
                        </div>
                     </div>{" "}
                     <div className='bg-white text-black p-8 rounded'>
                        <h1 className='font-{Dennis Sans, sans-serif} text-2xl font-medium p-2 text-blue-600'>
                           Overpriced for Basic Features
                        </h1>
                        <div className='flex p-2'>
                           <FaStar size={20} className='text-yellow-500' />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <p className='pl-4'>02/08/2024</p>
                        </div>
                        <div>
                           <p className='p-2'>
                              Zety’s subscription is outrageously priced for what it offers. The templates are fine, but I shouldn’t have to
                              pay just to download a resume. It’s very misleading that the most basic features are locked behind a paywall.
                              If you want a one-time resume builder, don’t bother with this—it is just not worth the cost.
                           </p>
                        </div>
                     </div>{" "}
                     <div className='bg-white text-black p-8 rounded'>
                        <h1 className='font-{Dennis Sans, sans-serif} text-2xl font-medium p-2 text-blue-600'>
                           Customization Restrictions
                        </h1>
                        <div className='flex p-2'>
                           <FaStar size={20} className='text-yellow-500' />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <FaStar size={20} />
                           <p className='pl-4'>08/08/2024</p>
                        </div>
                        <div>
                           <p className='p-2'>
                              Novoresume’s templates are nice, but you can’t customize them much. As someone who wanted to adjust some
                              details to fit my profession, I found the lack of flexibility really annoying. For the price they charge, I
                              expected more room for personalization and fewer limitations. Definitely not the best tool for anyone seeking
                              unique resumes.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </ContentWrapper>
         <style jsx>{`
            /* Animation for location button */
            @keyframes slideUp {
               0% {
                  transform: translateY(20px);
                  opacity: 0;
               }
               100% {
                  transform: translateY(0);
                  opacity: 1;
               }
            }
            .animate-slide-up {
               animation: slideUp 1.5s ease-out;
            }
         `}</style>
      </>
   );
};

export default Skill;
