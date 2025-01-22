"use client";
import React, { useEffect, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import Link from "next/link";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);

   const toggleMobileMenu = () => {
      setMobileMenu(!mobileMenu);
   };

   const handleLinkClick = () => {
      setMobileMenu(false); // Close the mobile menu when any link is clicked
   };

   return (
      <div className='fixed top-0 left-0 w-full z-50 '>
         <ContentWrapper>
            <div className='flex lg:justify-center justify-between items-center text-base font-sans font-medium p-6 bg-white lg:bg-none '>
               <div className='lg:hidden flex'>
                  <Link href={"/"}>
                     <h1 className='text-[#5b5f60]'>&copy; code by Madan</h1>
                  </Link>
               </div>
               <div className='md:flex hidden gap-x-12 capitalize'>
                  <Link
                     href={"/"}
                     onClick={handleLinkClick}
                     className='px-4 py-2 rounded-full border border-[#999d9e] text-[#999d9e] tracking-wide text-base'
                  >
                     Home
                  </Link>
                  <Link
                     href={"/work"}
                     onClick={handleLinkClick}
                     className='px-4 py-2 rounded-full border border-[#999d9e] text-[#999d9e] tracking-wide text-base'
                  >
                     Work
                  </Link>
                  <Link
                     href={"/resume"}
                     onClick={handleLinkClick}
                     className='px-4 py-2 rounded-full border border-[#999d9e] text-[#999d9e] tracking-wide text-base'
                  >
                     Resume
                  </Link>
                  <Link
                     href={"/certificate"}
                     onClick={handleLinkClick}
                     className='px-4 py-2 rounded-full border border-[#999d9e] text-[#999d9e] tracking-wide text-base'
                  >
                     Certificate
                  </Link>
               </div>
               <div className='flex md:hidden items-center '>
                  {mobileMenu ? (
                     <VscChromeClose onClick={toggleMobileMenu} />
                  ) : (
                     <SlMenu onClick={toggleMobileMenu} className='text-[#5b5f60]' />
                  )}
               </div>
            </div>
            {mobileMenu && (
               <div
                  className={`absolute right-0  bg-white text-black flex justify-center items-center  w-full h-screen text-center  transition duration-1000 ease-in-out transform ${
                     mobileMenu ? "translate-y-0" : "-translate-y-full"
                  }`}
                  style={{ zIndex: 50 }}
               >
                  <div className='rounded flex flex-col gap-y-12 py-4 px-8 text-2xl mb-4 font-{Dennis Sans, sans-serif} animate-slide-up'>
                     <Link href={"/work"} onClick={handleLinkClick}>
                        Work
                     </Link>
                     <Link href={"/resume"} onClick={handleLinkClick}>
                        Resume
                     </Link>
                     <Link href={"/certificate"} onClick={handleLinkClick}>
                        Certificate
                     </Link>
                  </div>
               </div>
            )}
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
      </div>
   );
};

export default Navbar;
