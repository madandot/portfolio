"use client";
import React, { useEffect, useRef, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import { GoArrowDownRight } from "react-icons/go";
import { FaGlobeAmericas } from "react-icons/fa";
import "../app/globals.css";

const HeroBanner = () => {
   const [isScrollingDown, setIsScrollingDown] = useState(false);
   const lastScrollY = useRef(0);
   const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
         setIsScrollingDown(true);
      } else {
         setIsScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;
   };
   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div className='bg-[#FFF] h-screen  w-full relative overflow-hidden z-0'>
         <ContentWrapper>
            <div className='flex flex-col items-end absolute lg:top-[200px]  right-4 top-[200px] transform opacity-100 animate-slide-up'>
               <div>
                  <GoArrowDownRight size={50} className='text-black' />
                  <div className='text-4xl font-bold font-{Dennis Sans, sans-serif} ml-10 mt-4 text-black'>
                     <h4>UI/UX Designer</h4>
                  </div>
               </div>
            </div>
            {/* Continuous or reverse scrolling name */}
            <div className='absolute bottom-1 overflow-hidden whitespace-nowrap flex items-center justify-center'>
               <div className={`inline-block ${isScrollingDown ? "animate-scroll-reverse" : "animate-scroll"}`}>
                  <span className='text-[15vw] font-normal  text-[#000] font-{Dennis Sans, sans-serif}'>
                     Madan HanumanthReddy - Madan HanumanthReddy -
                  </span>
               </div>
            </div>
            <div className='absolute lg:top-[230px] top-[400px] -left-16 bg-white/50 border border-black text-black px-12 py-4 rounded-full flex items-center shadow-2xl animate-slide-up'>
               <span className='mr-4 pl-8 font-{Dennis Sans, sans-serif}'>Located in Bangalore </span>
               <FaGlobeAmericas
                  size={40}
                  style={{
                     animation: "rotateIcon 10s linear infinite",
                  }}
               />
            </div>
         </ContentWrapper>
         <style jsx>{`
            @keyframes scroll {
               0% {
                  transform: translateX(0%);
               }
               100% {
                  transform: translateX(-50%);
               }
            }
            @keyframes scroll-reverse {
               0% {
                  transform: translateX(-50%);
               }
               100% {
                  transform: translateX(0%);
               }
            }
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
            @keyframes rotateIcon {
               0% {
                  transform: rotate(0deg);
               }
               100% {
                  transform: rotate(360deg);
               }
            }
            .rotate-animation {
               animation: rotateIcon 10s linear infinite;
            }
            .animate-slide-up {
               animation: slideUp 1.5s ease-out;
            }
            .animate-scroll {
               animation: scroll 20s linear infinite;
            }
            .animate-scroll-reverse {
               animation: scroll-reverse 20s linear infinite;
            }
         `}</style>
      </div>
   );
};

export default HeroBanner;
