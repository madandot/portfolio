"use client";
import React from "react";
import { useState, useEffect } from "react";
import ContentWrapper from "@/components/ContentWrapper";
import { IoIosArrowBack, IoIosArrowRoundDown } from "react-icons/io";
import { SiCanva } from "react-icons/si";
import { SiNovu } from "react-icons/si";
import { GrResume } from "react-icons/gr";
import { FaSquarespace } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";
import I1 from "../../../public/images/Home02.jpeg";
import I2 from "../../../public/images/men.jpg";
import I3 from "../../../public/images/gettyimages.jpg";
import I4 from "../../../public/images/women.JPG";
import I5 from "../../../public/images/Subscription page.PNG";
import I6 from "../../../public/images/Formate.PNG";
import I7 from "../../../public/images/template.PNG";
import I8 from "../../../public/images/ATS.PNG";

const Skill = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const slides = [
      {
         id: 1,
         title: "Pain Point",
         content:
            "Job seekers face challenges with rigid and expensive subscription models in resume-building platforms, which often lock them into long-term commitments and limit their ability to make necessary updates without incurring high costs.",
         solution:
            "Offer flexible and affordable subscription plans that cater to various user needs. The Single Resume plan allows users to create a professional resume with five free updates for ₹300, ensuring they can make initial adjustments without extra charges. The ATS Resume plan, priced at ₹500, provides a more customized resume tailored to job-specific details, also including five free updates. For ongoing needs, a Resume Update option at ₹150 per update after the initial five free ones enables users to keep their resumes current without a long-term financial commitment. These plans provide a balanced approach to affordability and functionality, meeting diverse user preferences.",
         image: I5,
      },
      {
         id: 2,
         title: "Pain Point",
         content:
            "Users find formatting tools overly complex, leading to frustration and inconsistent resumes. They need a simple, intuitive solution for professional-looking results.",
         solution:
            "Recognizing the frustrations users face with complex and unintuitive formatting tools, I focused on simplifying the resume creation process without compromising professional quality. By offering a curated selection of font styles (Inter, Aptos, and Calibri) and adjustable font sizes (10–14), I aimed to provide users with the flexibility to tailor their resumes while maintaining consistency and readability. Additionally, I implemented a real-time preview feature that allows users to instantly view how their formatting choices impact their resume layout. To further support users, I introduced a comprehensive guide and access to expert consultations via Zoom, ensuring they receive personalized assistance when needed. This approach has successfully reduced decision fatigue, enhanced the user experience, and empowered individuals to create polished, professional resumes with ease.",
         image: I6,
      },
      {
         id: 3,
         title: "Pain Point",
         content: "Users find it confusing and overwhelming to choose from a large number of resume templates.",
         solution:
            "To address the overwhelming template choices, I limited the selection to a curated set of templates, categorized by industry, career level, and job type. I implemented an interactive guide that offers personalized template recommendations based on user input. Users can also preview templates with sample content and schedule Zoom consultations with content experts for personalized assistance, ensuring they choose the best option for their needs. This approach simplifies the process and improves user confidence.",
         image: I7,
      },
      {
         id: 4,
         title: "Pain Point",
         content:
            "Users have difficulty optimizing their resumes for Applicant Tracking Systems (ATS), which is critical for passing automated screenings and reaching human reviewers.",
         solution:
            "To address the ATS optimization pain point, provide users with ATS-friendly resume templates that are simple and formatted for easy scanning by ATS. Allow users to paste job descriptions to receive keyword suggestions and ensure their resumes align with the job requirements. Include a real-time ATS compatibility checker that provides instant feedback on keyword usage and formatting, along with an ATS readability score to show how likely the resume is to pass ATS screenings. Additionally, offer a step-by-step guide and Zoom consultations with ATS experts to further assist users in optimizing their resumes. This solution will streamline the process and increase the chances of resumes reaching human reviewers.",
         image: I8,
      },
   ];

   const handleNextSlide = () => {
      if (currentSlide < slides.length - 1) {
         setCurrentSlide(currentSlide + 1);
      }
   };

   const handlePrevSlide = () => {
      if (currentSlide > 0) {
         setCurrentSlide(currentSlide - 1);
      }
   };

   return (
      <>
         <ContentWrapper>
            <div className='flex justify-between items-center bg-black text-white w-full pt-16 '>
               <div className=' text-[16vw] font-normal font-{Dennis Sans, sans-serif} animate-slide-up px-2 '>NuStart</div>
               <div>
                  <IoIosArrowRoundDown size={250} className='animate-slide-up icon hidden md:flex' />
                  <IoIosArrowRoundDown size={50} className='animate-slide-up icon md:hidden flex' />
               </div>
            </div>
            <div className='bg-black text-[#fff] flex justify-between px-8 gap-x-8 pb-10'>
               <div className='w-full'>
                  <div className='flex justify-between border-t-2  border-b-2 border-[#ffffff4d] font-{Dennis Sans, sans-serif} py-4 text-lg '>
                     <div>
                        <h1>02</h1>
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
                        <div className='text-[#ffffff80] pt-1 font-normal text-lg'>UI / UX Design</div>
                     </div>
                     <div>
                        <div className='md:pt-0 pt-4'>Tools</div>
                        <div className='text-[#ffffff80] pt-4 font-normal text-lg'>Figma</div>
                        <div className='text-[#ffffff80] pt-1 font-normal text-lg'>Miro</div>
                     </div>
                  </div>
                  <div>
                     <h1 className='md:w-[500px] mt-5 font-{Dennis Sans, sans-serif} lg:text-6xl text-3xl font-normal lg:leading-[70px] -tracking-[-1.3px] '>
                        Designing Tools to Build Better Futures
                     </h1>
                  </div>
                  <div>
                     <p className=' mt-5 lg:text-xl text-[18px] font-sans font-normal '>
                        In today’s competitive job market, crafting a standout resume is more critical than ever. Many resume-building tools
                        complicate this process with rigid subscriptions, formatting issues, and overwhelming template choices. Our
                        platform, designed based on user feedback, offers an intuitive, user-friendly experience with ATS-optimized
                        templates and customizable designs. We’ve also simplified our subscription plans to provide greater flexibility for
                        users. A key feature, the intelligent word suggestion tool, helps users communicate their skills effectively. By
                        focusing on functionality and user empowerment, our platform enables job seekers to create polished, professional
                        resumes with ease.
                     </p>
                  </div>
               </div>
               <div className='w-full h-screen hidden lg:flex '>
                  <Image src={I1} width={800} height={500} className='w-full h-full object-cover rounded-lg' alt='home' />
               </div>
            </div>
            <div className='bg-white text-black text-center lg:h-[40vh] items-center flex justify-center flex-col '>
               <div className='mt-5 font-{Dennis Sans, sans-serif} text-6xl font-normal leading-[70px] -tracking-[1.3px] '>
                  HMW Statement
               </div>
               <div className=' mt-5 text-xl font-normal tracking-wide leading-8 lg:w-[800px]'>
                  How Met We help job seekers create standout, professional resumes easily and efficiently, while offering a flexible and A
                  user-friendly platform that meets the needs of users with different abilities and experience levels.
               </div>
            </div>
            <div className='h-[100vh] flex  justify-center items-center gap-x-4 animate-slide-up '>
               <div className='font-{Dennis Sans, sans-serif} text-6xl font-semibold'>01 / </div>
               <div className='font-{Dennis Sans, sans-serif} lg:text-6xl font-normal'>
                  Chapter <br /> Research
               </div>
            </div>
            <div className='text-black py-8 bg-white'>
               <h1 className=' text-center text-black font-{Dennis Sans, sans-serif} text-3xl font-semibold my-5 -tracking-[1px]'>
                  I conducted research in two phases
               </h1>
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
               <div className='lg:px-10 px-4 py-10'>
                  <p className='lg:text-center  mt-5 text-xl font-normal tracking-wide leading-8 '>
                     To understand user frustrations and requirements, I conducted interviews with individuals from various industries. The
                     goal was to gain insights into their needs to better design a user-friendly resume-building platform. Initially, we
                     assumed users struggled with technical issues like formatting and ATS compatibility. However, the research revealed
                     broader concerns, such as complex subscription models and a preference for limited customization. Users sought
                     simplicity and flexibility, with a desire for curated templates tailored to specific roles. These findings shaped our
                     approach, emphasizing features that enhance the overall resume-building experience through simplicity and ease of use.
                  </p>
               </div>
            </div>
            <div className=''>
               <div className='border-b-2 border-[#ffffff4d] lg:h-[50vh] flex lg:justify-center lg:items-center px-8 py-4 lg:py-0'>
                  <h1 className='font-{Dennis Sans, sans-serif} lg:w-full font-normal lg:text-[5.2vw] text-2xl lg:leading-[6.3vw]'>
                     #01 <br />
                     Secondary Research
                  </h1>
               </div>
               <div>
                  <div>
                     <h1 className='font-{Dennis Sans, sans-serif} px-8 lg:text-4xl text-xl font-semibold my-5 -tracking-[1px]'>
                        Competitor Analysis
                     </h1>
                     <p className='px-8 mb-4 text-[#ffffffa8] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                        I conducted secondary research to gain deeper insights into existing products in the market, focusing on the key
                        features they offer and the challenges users face while using them. My market research began with four competitors:
                        Canva Resume Builder, Zety, Resume.io, and Novoresume. This analysis helped identify areas where my resume-building
                        platform could enhance its offerings and introduce new features. While these products have similar offerings, the
                        focus on limited customization and simplicity presents an opportunity for my platform to stand out and better meet
                        user needs.
                     </p>
                  </div>
                  <div className='bg-black'>
                     <div className='grid md:grid-cols-2 gap-[1px]'>
                        <div className='bg-[#141414] text-white flex flex-col justify-center items-start py-8 px-8'>
                           <h1 className='py-4 md:px-8'>
                              <SiCanva size={100} className='text-blue-700' />
                           </h1>
                           <p className='md:px-8 mb-4  mt-5 text-xl font-normal tracking-wide leading-8 font-sans '>
                              Canva offers a visually appealing platform with professionally designed templates, allowing users to create
                              polished resumes effortlessly, even without prior design skills. Its extensive template library and
                              user-friendly interface make the resume-building process straightforward and accessible. However, some users
                              may find the subscription model complex, and the platform lacks real-time preview features. Additionally,
                              customization options are somewhat limited, which might restrict users looking for more personalized resume
                              designs.
                           </p>
                        </div>
                        <div className='bg-[#141414] text-white flex flex-col justify-center items-start py-8 px-8 '>
                           <h1 className='py-4 md:px-8'>
                              <FaSquarespace size={100} className='text-yellow-500' />
                           </h1>
                           <p className='md:px-8 mb-4  text-xl font-normal tracking-wide leading-8 font-sans '>
                              Zety offers a unique value proposition by combining pre-written content with keyword suggestions, helping
                              users optimize their resumes for Applicant Tracking Systems (ATS) while tailoring them to specific job roles.
                              Its features ensure ATS compatibility, provide helpful content suggestions, and guide users through a
                              step-by-step resume creation process. However, the platform&aposs complex subscription models and lack of a
                              real-time preview feature may present challenges for some users.
                           </p>
                        </div>
                        <div className='bg-[#141414] text-white flex flex-col justify-center items-start py-8 px-8'>
                           <h1 className='py-4 md:px-8'>
                              <GrResume size={100} className='text-green-500' />
                           </h1>
                           <p className='md:px-8 mb-4  mt-5 text-xl font-normal tracking-wide leading-8 font-sans '>
                              Resume.io focuses on ease of use, offering real-time previews and ATS optimization tools to help users quickly
                              refine their resumes to meet job market standards. Its modern interface enhances the user experience, making
                              resume creation straightforward and efficient. However, the platform complex subscription models, limited
                              customization options, and somewhat generic templates may limit its appeal for users seeking highly
                              personalized resumes.
                           </p>
                        </div>
                        <div className='bg-[#141414] text-white flex flex-col justify-center items-start py-8 px-8'>
                           <h1 className='py-4 md:px-8'>
                              <SiNovu size={100} className='text-orange-600' />
                           </h1>
                           <p className='md:px-8 mb-4  mt-5 text-xl font-normal tracking-wide leading-8  '>
                              Novoresume provides a streamlined, intuitive experience that simplifies resume creation while delivering sleek
                              and professional results. Its user-friendly design and real-time preview feature make the process efficient
                              and accessible, with a strong focus on modern aesthetics. However, the platform complex subscription plans,
                              lack of ATS keyword suggestions, and restrictions on premium features may pose challenges for users seeking
                              more comprehensive functionality. designs.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className=' lg:flex justify-center items-center gap-4 py-8 lg:px-8 px-2 min-h-[400px] border-b-2 border-[#ffffff4d]'>
                  <div className=' flex flex-col justify-between'>
                     <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px]'>User Reviews</h1>
                     <p className=' mb-4 text-[#ffffffa8] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif} w-full'>
                        User Reviews I looked for user reviews on Play Store for different competitor apps to get more insights on user pain
                        points.
                     </p>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                     <div className='flex flex-col justify-between  bg-white text-black lg:px-4 px-[20px] py-2 mb-2 lg:w-[500px] w-[300px] opacity-100'>
                        <div>
                           <h1 className='font-{Dennis Sans, sans-serif} text-right text-2xl font-semibold my-2 -tracking-[1px]'>01</h1>
                        </div>
                        <div>
                           <p className='font-{Dennis Sans, sans-serif} text-2xl font-semibold my-2 -tracking-[1px]'>
                              Paid subscriptions are not worth
                           </p>
                           <p>
                              The one thing I downloaded this app for is locked behind a paywall. Terrible. Something I am only going to use
                              once and not something I am going to use often, why would I waste my money. So pointless.
                           </p>
                        </div>
                     </div>
                     <div className='flex flex-col justify-between  bg-white text-black lg:px-4 px-[20px] py-2 mb-2 lg:w-[500px] w-[300px] opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer'>
                        <div>
                           <h1 className='font-{Dennis Sans, sans-serif} text-right text-2xl font-semibold my-2 -tracking-[1px]'>02</h1>
                        </div>
                        <div>
                           <p className='font-{Dennis Sans, sans-serif} text-2xl font-semibold my-2 -tracking-[1px]'>
                              Lack of ATS Compatibility
                           </p>
                           <p>
                              The templates on Canva are creative, but they aren’t optimized for ATS, which is essential for my job search.
                              I spent hours designing my resume only to find out it wasn’t being seen by recruiters.
                           </p>
                        </div>
                     </div>
                     <div className='flex flex-col justify-between  bg-white text-black lg:px-4 px-[20px] py-2 mb-2 lg:w-[500px] w-[300px]  opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer'>
                        <div>
                           <h1 className='font-{Dennis Sans, sans-serif} text-right text-2xl font-semibold my-2 -tracking-[1px]'>03</h1>
                        </div>
                        <div>
                           <p className='font-{Dennis Sans, sans-serif} text-2xl font-semibold my-2 -tracking-[1px]'>
                              Overpriced for Basic Features
                           </p>
                           <p>
                              Zety’s subscription is outrageously priced for what it offers. The templates are fine, but I shouldn’t have to
                              pay just to download a resume. It’s misleading that the most basic features are behind a paywall.
                           </p>
                        </div>
                     </div>
                     <div className='flex flex-col justify-between  bg-white text-black lg:px-4 px-[20px] py-2 mb-2 lg:w-[500px] w-[300px] opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer'>
                        <div>
                           <h1 className='font-{Dennis Sans, sans-serif} text-right text-2xl font-semibold my-2 -tracking-[1px]'>04</h1>
                        </div>
                        <div>
                           <p className='font-{Dennis Sans, sans-serif} text-2xl font-semibold my-2 -tracking-[1px]'>
                              Customization Restrictions
                           </p>
                           <p>
                              Novoresume’s templates are nice, but you can’t customize them much. As someone who wanted to adjust details
                              for my profession, I found the lack of flexibility frustrating. For the price, I expected more room for
                              personalization
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='mb-8'>
                  <h1 className='font-sans lg:text-[28px] text-[24px] font-bold  capitalize py-2 px-2'>DEFINING THE PROBLEM.</h1>
                  <p className='font-{Dennis Sans, sans-serif} text-[16px] lg:text-[18px] font-normal py-2 px-2'>
                     In a competitive job market, job seekers face significant challenges in creating standout resumes due to rigid
                     subscription models, complex formatting issues, and an overwhelming number of template choices in existing
                     resume-building tools. These barriers hinder users from crafting ATS-optimized resumes that effectively showcase their
                     skills and experiences. Our user research, which involved interviews with individuals from various industries, revealed
                     a strong preference for simplicity, flexibility, and curated templates tailored to specific roles. Users desire a
                     platform that streamlines the resume-building process, offering intuitive design, intelligent word suggestions, and
                     customizable templates to create professional, polished resumes with ease.
                  </p>
               </div>
            </div>
            <div className='bg-[#141414] text-white'>
               <div className='  flex lg:justify-center lg:items-center lg:px-8 px-2  py-4 '>
                  <h1 className='font-{Dennis Sans, sans-serif} -tracking-[0.26vw] lg:w-full font-normal lg:text-[5.2vw] text-2xl lg:leading-[6.3vw]'>
                     #02 <br /> Primary Research
                  </h1>
               </div>
               <div className=' flex flex-col justify-center'>
                  <h1 className='font-{Dennis Sans, sans-serif} lg:px-8 px-2 text-[24px] lg:text-[28px] font-bold'>
                     User Surveys and Interviews
                  </h1>
                  <p className='lg:px-8 lg:text-[18px] px-2 text-[16px]  font-normal font-{Dennis Sans, sans-serif}'>
                     To understand the needs and pain points of users for our resume-building platform, I conducted primary research through
                     user surveys. The survey aimed to gather insights into user experiences, challenges, and preferences when creating
                     resumes. The data collected from the survey will be analyzed to identify user personas, pain points, and
                     decision-making processes. This research will guide the development of features that address the most common issues
                     users face, ensuring the platform aligns with their needs and expectations needs.
                  </p>
               </div>
               <div className='lg:px-8 px-2 py-4 md:flex justify-center items-center '>
                  <div className='md:w-1/2'>
                     <h1 className='font-sans lg:text-[28px] text-[24px] font-bold  capitalize py-2'>_______ Target audience.</h1>
                     <p className='font-{Dennis Sans, sans-serif} text-[16px] lg:text-[18px] font-normal py-2 '>
                        The target audience includes recent graduates, mid-level professionals, and career switchers looking to create
                        ATS-compatible resumes. It also caters to freelancers, entrepreneurs, and HR professionals who need customizable
                        templates for showcasing skills and experience. The platform aims to provide an easy, efficient way for users to
                        craft professional and tailored resumes.
                     </p>
                     <div className='lg:px-8 lg:flex flex-col justify-between lg:py-10 gap-7 '>
                        <h1 className='bg-green-600 text-white px-10 py-8 font-semibold leading-7 text-lg rounded-md mb-2 '>
                           Recent graduates
                        </h1>
                        <h1 className='bg-green-600 text-white px-10 py-8 font-semibold leading-7 text-lg rounded-md mb-2 '>Mid-level</h1>
                        <h1 className='bg-green-600 text-white px-10 py-8 font-semibold leading-7 text-lg rounded-md mb-2 '>
                           professionals
                        </h1>
                        <h1 className='bg-green-600 text-white px-10 py-8 font-semibold leading-7 text-lg rounded-md mb-2 '>Freelancers</h1>
                        <h1 className='bg-green-600 text-white px-10 py-8 font-semibold leading-7 text-lg rounded-md mb-2 '>
                           HR Professionals
                        </h1>
                     </div>
                  </div>
                  <div className='md:w-1/2  hidden lg:flex justify-center items-center shadow-2xl shadow-black'>
                     <Image src={I3} width={800} height={800} className='object-cover  rounded-lg' alt='Target' />
                  </div>
               </div>
            </div>
            <div className='bg-white text-black'>
               <div className='px-8 pt-16'>
                  <h1 className='font-{Dennis Sans, sans-serif} md:px-8 md:text-4xl text-3xl font-semibold my-5 -tracking-[1px]'>
                     _______ Pain Points
                  </h1>
               </div>
               <div className='md:grid lg:grid-cols-2 px-8 pb-16 gap-8'>
                  <div className='bg-white text-black flex flex-col justify-center items-center'>
                     <h1 className='border-2 border-green-600 w-20 h-20 flex justify-center items-center rounded-full font-semibold text-2xl '>
                        01
                     </h1>
                     <p className='py-8 font-sans font-normal text-xl leading-7 md:w-[500px] text-center'>
                        Job seekers face challenges with rigid and expensive subscription models in resume-building platforms, which often
                        lock them into long-term commitments and limit their ability to make necessary updates without incurring high costs.
                     </p>
                  </div>
                  <div className='bg-white text-black flex flex-col justify-center items-center'>
                     <h1 className='border-2 border-green-600 w-20 h-20 flex justify-center items-center rounded-full font-semibold text-2xl '>
                        02
                     </h1>
                     <p className='py-8 font-sans font-normal text-xl leading-7 md:w-[500px] text-center'>
                        Users find formatting tools overly complex, leading to frustration and inconsistent resumes. They need a simple,
                        user-friendly solution for professional-looking results.
                     </p>
                  </div>
                  <div className='bg-white text-black flex flex-col justify-center items-center'>
                     <h1 className='border-2 border-green-600 w-20 h-20 flex justify-center items-center rounded-full font-semibold text-2xl '>
                        03
                     </h1>
                     <p className='py-8 user-friendly text-xl leading-7 md:w-[500px] text-center'>
                        Users find it confusing and overwhelming to choose from a large number of resume templates.
                     </p>
                  </div>
                  <div className='bg-white text-black flex flex-col justify-center items-center'>
                     <h1 className='border-2 border-green-600 w-20 h-20 flex justify-center items-center rounded-full font-semibold text-2xl '>
                        04
                     </h1>
                     <p className='py-8 font-sans font-normal text-xl leading-7 md:w-[500px] text-center'>
                        Users have difficulty optimizing their resumes for Applicant Tracking Systems (ATS), which is critical for passing
                        automated screenings and reaching human reviewers.
                     </p>
                  </div>
               </div>
            </div>
            <div>
               <div className='lg:h-[30vh] flex flex-col justify-center px-8'>
                  <h1 className='font-{Dennis Sans, sans-serif} lg:px-8 lg:text-4xl text-xl font-semibold my-5 -tracking-[1px]'>
                     User Personas
                  </h1>
                  <p className='lg:px-8  text-[#ffff] font-{Dennis Sans, sans-serif} font-light lg:text-xl leading-7'>
                     I created two user personas based on the responses from our user interviews. Deriving these personas helped me gain a
                     deeper understanding of our users and build empathy with their experiences. By thinking from the users perspectives, I
                     was able to make more informed and user-centric decisions, focusing on their specific needs and goals.
                  </p>
               </div>
               <div class='bg-black text-white font-sans'>
                  <div class='max-w-4xl mx-auto p-8'>
                     <h1 class='text-3xl font-bold mb-6'>01</h1>
                     <div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div class='bg-blue-600 p-4 rounded-lg'>
                           <Image src={I2} width={500} height={500} className='rounded-lg' />
                           <p>
                              <strong>NAME:</strong> Nagendra B S
                           </p>
                           <p>
                              <strong>AGE:</strong> 24
                           </p>
                           <p>
                              <strong>EDUCATION:</strong> BCA
                           </p>
                           <p>
                              <strong>JOB:</strong> Recent Graduate
                           </p>
                           <p>
                              <strong>LOCATION:</strong> Bangalore
                           </p>
                           <p>
                              <strong>HOBBIES:</strong> Karate
                           </p>
                        </div>
                        <div class='bg-blue-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Bio</h2>
                           <p className='text-[#ffff] font-{Dennis Sans, sans-serif} font-normal text-lg leading-7'>
                              Nagendra has just graduated and is excited to enter the marketing field. He is full of energy but finds the
                              process of creating a resume challenging. He is looking for a tool that will streamline the process and make
                              it less overwhelming.
                           </p>
                        </div>
                        <div class='bg-blue-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Personality</h2>
                           <ul class='list-disc pl-6 text-[#ffff] font-{Dennis Sans, sans-serif} font-normal text-lg leading-7'>
                              <li>Hardworking</li>
                              <li>Smart</li>
                              <li>Expressive</li>
                              <li>Thoughtful</li>
                           </ul>
                        </div>
                     </div>
                     <div class='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div class='bg-blue-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Pain Points</h2>
                           <ul class='list-disc pl-6 text-[#ffff] font-{Dennis Sans, sans-serif} font-normal text-lg leading-7'>
                              <li>Overwhelmed by too many resume template choices, making it hard to decide.</li>
                              <li>Struggles with formatting resumes to make them professional and ATS-friendly.</li>
                              <li>Unsure how to tailor his resume for specific marketing job roles.</li>
                           </ul>
                        </div>
                        <div class='bg-blue-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Goals</h2>
                           <ul class='list-disc pl-6 text-[#ffff] font-{Dennis Sans, sans-serif} font-normal text-lg leading-7'>
                              <li>To secure his first full-time job in marketing with a standout resume.</li>
                              <li>To create a professional, visually appealing resume that aligns with industry standards.</li>
                              <li>To save time and reduce stress by using a user-friendly resume-building tool.</li>
                           </ul>
                        </div>
                        <div class='bg-blue-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Quote</h2>
                           <p>where words fail, Music speaks</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class='bg-black text-white font-sans'>
                  <div class='max-w-4xl mx-auto p-8'>
                     <h1 class='text-3xl font-bold mb-6'>02</h1>
                     <div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div class='bg-green-600 p-4 rounded-lg'>
                           <Image src={I4} width={500} height={500} className='rounded-lg' />
                           <p>
                              <strong>NAME:</strong> Priya Ramesh
                           </p>
                           <p>
                              <strong>AGE:</strong> 28
                           </p>
                           <p>
                              <strong>EDUCATION:</strong> MBA
                           </p>
                           <p>
                              <strong>JOB:</strong> Marketing Specialist
                           </p>
                           <p>
                              <strong>LOCATION:</strong> Mumbai
                           </p>
                           <p>
                              <strong>HOBBIES:</strong> Photography
                           </p>
                        </div>
                        <div class='bg-green-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Bio</h2>
                           <p class='text-white font-sans font-normal text-lg leading-7'>
                              Priya is a passionate marketing specialist with over five years of experience. She loves connecting with
                              people through creative campaigns but finds it challenging to update her resume to reflect her evolving
                              skills.
                           </p>
                        </div>
                        <div class='bg-green-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Personality</h2>
                           <ul class='list-disc pl-6 text-white font-sans font-normal text-lg leading-7'>
                              <li>Creative</li>
                              <li>Dynamic</li>
                              <li>Collaborative</li>
                              <li>Detail-oriented</li>
                           </ul>
                        </div>
                     </div>
                     <div class='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div class='bg-green-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Pain Points</h2>
                           <ul class='list-disc pl-6 text-white font-sans font-normal text-lg leading-7'>
                              <li>Struggles with showcasing her diverse marketing experience succinctly.</li>
                              <li>Finds it hard to keep up with the latest resume trends and tools.</li>
                              <li>Wants to make her resume visually appealing while remaining professional.</li>
                           </ul>
                        </div>
                        <div class='bg-green-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Goals</h2>
                           <ul class='list-disc pl-6 text-white font-sans font-normal text-lg leading-7'>
                              <li>To update her resume to reflect her skills and accomplishments accurately.</li>
                              <li>To stand out in the competitive marketing job market.</li>
                              <li>To use an intuitive tool that simplifies the resume-building process.</li>
                           </ul>
                        </div>
                        <div class='bg-green-600 p-4 rounded-lg'>
                           <h2 class='text-xl font-bold mb-2'>Quote</h2>
                           <p>Creativity is intelligence having fun.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='bg-[#141414] text-white'>
               <div className='lg:px-8 px-4 pt-16 pb-16'>
                  <h1 className='font-{Dennis Sans, sans-serif} md:px-8 md:text-4xl text-3xl font-semibold my-5 -tracking-[1px]'>
                     _______ User Journey Map
                  </h1>
                  <p className='lg:px-8  font-{Dennis Sans, sans-serif} font-light lg:text-xl leading-7'>
                     Mapping the customer journey was highly insightful. It deepened my empathy for users and helped clearly define their
                     pain points.
                  </p>
                  <div class='bg-black text-white p-6 rounded-lg shadow-lg mb-8 mt-8'>
                     <h2 class='text-2xl font-bold mb-4'>User Journey Map</h2>
                     <p class='text-lg font-semibold'>Persona: Nagendra B S</p>
                     <p class='mb-6'>Goal: To secure her first full-time job in marketing with a standout resume.</p>
                     <div class='grid md:grid-cols-4 gap-6'>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Actions</h3>
                           <p>Discover user-friendly resume builders through social media ads, search engines, and recommendations.</p>
                           <p class='mt-4'>Explore website landing pages, testimonials, and feature overviews.</p>
                           <p class='mt-4'>Sign up and start creating a resume by choosing from a variety of templates.</p>
                           <p class='mt-4'>Customize and download the resume using export options and feedback forms.</p>
                        </div>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Task List</h3>
                           <p>Overcome being overwhelmed by numerous options and credibility issues.</p>
                           <p class='mt-4'>Evaluate ease of use and effectiveness of templates.</p>
                           <p class='mt-4'>Select the most suitable resume template without decision fatigue.</p>
                           <p class='mt-4'>Ensure the resume is ATS-compliant and correctly formatted.</p>
                        </div>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Thoughts</h3>
                           <p>What makes this platform credible?</p>
                           <p class='mt-4'>Are the templates effective for real-world jobs?</p>
                           <p class='mt-4'>Which template works best for my needs?</p>
                           <p class='mt-4'>Is my resume compliant and professional?</p>
                        </div>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Improvement Opportunities</h3>
                           <p>Build trust with user reviews and testimonials.</p>
                           <p class='mt-4'>Provide quick previews and detailed examples.</p>
                           <p class='mt-4'>Offer recommendations based on industry.</p>
                           <p class='mt-4'>Ensure clear export options with ATS compliance.</p>
                        </div>
                     </div>
                  </div>
                  <div class='bg-black text-white p-6 rounded-lg shadow-lg'>
                     <h2 class='text-2xl font-bold mb-4'>User Journey Map</h2>
                     <p class='text-lg font-semibold'>Persona: Priya Ramesh</p>
                     <p class='mb-6'>Goal: To create a professional resume for a career change in software development.</p>
                     <div class='grid md:grid-cols-4 gap-6'>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Actions</h3>
                           <p>Research resume-building platforms through online forums, blogs, and industry-specific resources.</p>
                           <p class='mt-4'>Compare different platforms based on features, pricing, and user reviews.</p>
                           <p class='mt-4'>
                              Sign up for a platform and begin crafting a resume using templates geared towards software development.
                           </p>
                           <p class='mt-4'>
                              Tailor the resume to highlight transferable skills and download the final version for job applications.
                           </p>
                        </div>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Task List</h3>
                           <p>Identify the best platform that meets her needs for a career transition.</p>
                           <p class='mt-4'>Assess the relevance of templates for the software development industry.</p>
                           <p class='mt-4'>Choose a template that effectively showcases her skills and experience.</p>
                           <p class='mt-4'>Ensure the resume is optimized for ATS (Applicant Tracking Systems).</p>
                        </div>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Thoughts</h3>
                           <p>How can I make my non-technical experience appealing to tech recruiters?</p>
                           <p class='mt-4'>Are there any templates specifically designed for career changers?</p>
                           <p class='mt-4'>Which skills should I emphasize to make my resume stand out?</p>
                           <p class='mt-4'>Is this platform reliable and easy to use?</p>
                        </div>
                        <div>
                           <h3 class='font-bold text-lg mb-2 border-b-4 border-green-600 w-fit'>Improvement Opportunities</h3>
                           <p>Provide industry-specific templates and examples for career changers.</p>
                           <p class='mt-4'>Offer guidance on highlighting transferable skills effectively.</p>
                           <p class='mt-4'>Include a feature for peer or expert reviews of resumes.</p>
                           <p class='mt-4'>Ensure the platform is user-friendly and includes tips for ATS optimization.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='mb-8'>
               <h1 className='font-{Dennis Sans, sans-serif} px-8 lg:text-4xl text-xl font-semibold my-5 -tracking-[1px]'>Product Goal</h1>
               <p className='px-8 mb-4 text-[#ffffffa8] text-xl font-normal tracking-wide leading-8 '>
                  The goal is to develop a user-friendly platform that simplifies the resume creation process by offering a carefully
                  curated selection of high-quality templates and meaningful customization options. This ensures that all users, regardless
                  of their experience level, can effortlessly craft professional resumes that pass ATS filters and highlight their unique
                  strengths, without feeling overwhelmed by excessive choices. To support this, the platform offers flexible subscription
                  plans, providing users with access to advanced templates, expert guidance, and additional customization features, while
                  maintaining affordable pricing for different needs and budgets.
               </p>
            </div>
            <div className='pt-16'>
               <div>
                  <h1 className='font-{Dennis Sans, sans-serif} -tracking-[0.26vw] lg:w-full font-normal lg:text-[5.2vw] text-2xl lg:leading-[6.3vw] text-center'>
                     IDEATION
                  </h1>
                  <p className='px-8 mb-4 text-[#ffffffa8] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif} text-center'>
                     Creating solutions for the problems
                  </p>
               </div>
               <div>
                  <p className='lg:px-8 px-2  mb-4 text-[#ffff] text-xl font-normal tracking-wide leading-8 text-center'>
                     Mapping the customer journey was very insightful. It helped me empathize with the users and define their pain points.
                     Gaining transparency into user thoughts and actions while looking for a roommate provided an opportunity to understand
                     user behavior better. After conducting user research and creating personas and a customer journey map, I identified
                     major user pain points and opportunities for improvement. Based on these pain points, I developed several potential
                     solutions. After careful consideration and using the idea sorter method, I decided to proceed with the following
                     solutions.
                  </p>
               </div>
               <div className='relative h-screen   overflow-hidden '>
                  {/* Slide Content */}
                  <div className='relative h-full  lg:flex lg:flex-col justify-center items-center'>
                     {slides.map((slide, index) => (
                        <div
                           key={slide.id}
                           className={`absolute inset-0 transition-transform duration-[2000ms] ease-out
                     ${currentSlide === index ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                     lg:flex flex-col md:flex-row justify-center items-center bg-white text-black p-4`}
                        >
                           <div className=' lg:p-4'>
                              <h1 className='font-{Dennis Sans, sans-serif}  md:text-6xl text-xl font-bold my-5 text-blue-700  '>
                                 {slide.id}
                              </h1>
                              <h1 className='font-{Dennis Sans, sans-serif}  md:text-4xl text-2xl font-semibold my-5 tracking-tight capitalize'>
                                 {slide.title}
                              </h1>
                              <p className='text-xl font-normal tracking-wide leading-8'>{slide.content}</p>
                              <h2 className='font-{Dennis Sans, sans-serif}  md:text-4xl text-2xl font-semibold my-5 tracking-tight capitalize'>
                                 Solution
                              </h2>
                              <p className='text-xl font-normal tracking-wide leading-8'>{slide.solution}</p>
                           </div>
                           <div className='hidden  shadow-2xl shadow-black'>
                              <Image
                                 src={slide.image}
                                 width={960}
                                 height={540}
                                 className='object-cover w-full h-full rounded-lg'
                                 alt={`Slide ${slide.id}`}
                              />
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* Up and Down Arrows */}
                  <div className='absolute lg:top-[10%] top-80 right-0 flex lg:flex-col gap-4 justify-between items-center px-4'>
                     {/* Up Arrow */}
                     <button onClick={handlePrevSlide} className='text-white bg-black p-4 rounded-full shadow-lg '>
                        &#8592;
                     </button>

                     {/* Down Arrow */}
                     <button onClick={handleNextSlide} className='text-white bg-black p-4 rounded-full shadow-lg '>
                        &#8594;
                     </button>
                  </div>
               </div>
            </div>
            <div className='py-20'>
               <div className=''>
                  <div className='pb-16'>
                     <h1 className='font-{Dennis Sans, sans-serif} px-8 lg:text-4xl text-xl font-semibold my-5 -tracking-[1px]'>
                        INTERFACE DESIGNS
                     </h1>
                     <p className='px-8 mb-4 text-[#ffffffa8] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif} '>
                        I created low fidelity wireframes to quickly sketch out and explore various design ideas and concepts. Wireframes
                        are flexible, making it easier to make changes based on feedback without significant time and resource investment.
                        Then with the help of wireframes, I designed Interface screens for NUstart for the new user flows keeping in mind
                        the product guidelines.
                     </p>
                  </div>
               </div>
               <div className='flex flex-col lg:justify-end lg:items-end'>
                  <Link
                     href={"/lowfidelity"}
                     className='font-{Rmneue, sans-serif} lg:text-[26px] font-normal leading-[140%] capitalize -tracking-[1px] px-8 border-t-2 border-b-2 border-white py-4 lg:w-1/2  '
                  >
                     Low-Fidelity Wireframes
                  </Link>
                  <Link
                     href={"/highfidelity"}
                     className='font-{Rmneue, sans-serif} lg:text-[26px] font-normal leading-[140%] capitalize -tracking-[1px] px-8  border-white py-4 lg:w-1/2 '
                  >
                     High-Fidelity Design
                  </Link>
                  <Link
                     href={"/prototype"}
                     className='font-{Rmneue, sans-serif} lg:text-[26px] font-normal leading-[140%] capitalize -tracking-[1px] px-8 border-t-2 border-b-2 border-white py-4 lg:w-1/2 '
                  >
                     Prototype
                  </Link>
               </div>
            </div>
            <div className=' px-8'>
               <div className=''>
                  <h1 className='font-{Dennis Sans, sans-serif} lg:px-8 lg:text-4xl text-xl font-semibold my-5 -tracking-[1px]'>
                     _______ Key Takeaways.
                  </h1>
                  <p className='lg:px-8 lg:mb-4 text-[#ffff] font-{Dennis Sans, sans-serif} font-light lg:text-xl leading-7 mb-8'>
                     Our resume-building website is crafted with the user in mind, ensuring a seamless, intuitive, and efficient experience.
                     By utilizing accessible fonts and a clear text hierarchy, we provide a easily navigable interface. This focus on user
                     experience helps job seekers create standout resumes effortlessly, with real-time feedback, flexible customization
                     options, and affordable solutions.
                  </p>
               </div>
               <div className='pb-8'>
                  <h1 className='font-{Dennis Sans, sans-serif} lg:px-8 lg:text-4xl text-xl font-semibold my-5 -tracking-[1px]'>
                     _______ What I Learned.
                  </h1>
                  <p className='lg:px-8 lg:mb-4 text-[#ffff] font-{Dennis Sans, sans-serif} font-light lg:text-xl leading-7 mb-8'>
                     As a UX designer working on a resume-building website, I have gained valuable insights and knowledge through the design
                     process. Some of the key things I have learned include understanding user needs, conducting user research, writing and
                     creating wireframes, developing prototypes, and honing my visual design skills. This comprehensive approach ensures
                     that the final product is user-friendly, accessible, and meets the expectations of job seekers.
                  </p>
               </div>
            </div>
            <div className='lg:min-h-screen bg-white text-black pl-8 lg:flex py-8 items-center'>
               <div>
                  <h1 className='text-black lg:leading-[6.3vw] -tracking-[0.26px] font-serif lg:text-[5.2vw] text-4xl font-normal'>
                     Thank you for viewing.
                  </h1>
               </div>
               <div className='lg:mt-24 mt-4 pl-8 lg:w-full lg:max-w-[53.98rem] '>
                  <div className='flex justify-start items-start text-left border-t-[1px] border-b-[1px] border-black '>
                     <h1 className='font-[Dennis sans, sans-serif] -tracking-[0.5px] text-[28px] font-semibold leading-[28px] py-4'>
                        Next Step
                     </h1>
                  </div>
                  <div className='flex flex-col'>
                     <Link
                        href={"/productdesigner"}
                        className='font-[Dennis sans, sans-serif] -tracking-[0.5px] lg:text-[28px] text-lg font-normal leading-[28px] border-b-[1px] py-4 border-black px-8 text-gray-400
                        hover:text-black transition-colors ease-in-out duration-500 text-right'
                     >
                        View Next Project
                     </Link>
                     <Link
                        href={"https://www.linkedin.com/in/madan-h-b42195334/"}
                        target='_blank'
                        className='font-[Dennis sans, sans-serif] -tracking-[0.5px] lg:text-[28px] text-lg font-normal leading-[28px] border-b-[1px] py-4 border-black px-8 text-gray-400
                        hover:text-black transition-colors ease-in-out duration-500 text-right'
                     >
                        Find Me On LinkedIn
                     </Link>
                     <Link
                        href={"mailto:reddymadan0512@gmail.com"}
                        className='font-[Dennis sans, sans-serif] -tracking-[0.5px] lg:text-[28px] text-lg font-normal leading-[28px] border-b-[1px] py-4 border-black px-8 text-gray-400
                        hover:text-black transition-colors ease-in-out duration-500 text-right'
                     >
                        Contact Me
                     </Link>
                  </div>
               </div>
            </div>
         </ContentWrapper>
         <style jsx>{`
            /* Animation for location h1 */
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
