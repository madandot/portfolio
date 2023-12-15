"use client";
import React, { useEffect, useState } from "react";
import { GiStarSattelites } from "react-icons/gi";
import ContentWrapper from "./ContentWrapper";
import Link from "next/link";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
   const [mobileMenu, setMobileMenu] = useState(false);
   const closeMobileMenu = () => {
      setMobileMenu(false);
   };
   const openMobileMenu = () => {
      setMobileMenu(true);
   };
   const handleLinkClick = () => {
      closeMobileMenu(); // Close the mobile menu when any link is clicked
   };

   return (
      <div className='fixed w-full h-20'>
         <ContentWrapper>
            <div className='flex justify-between items-center px-7 py-4 bg-[#1e2328]'>
               <div>
                  <Link href={"/"}>
                     <GiStarSattelites size={40} />
                  </Link>
               </div>
               <div className='md:flex hidden items-center gap-x-10 font-bold'>
                  <Link href={"/skills"} onClick={handleLinkClick}>
                     Skills
                  </Link>
                  <Link href={"/project"} onClick={handleLinkClick}>
                     Projects
                  </Link>
                  <Link href={"/resume"} onClick={handleLinkClick}>
                     Resume
                  </Link>
                  <Link href={"/certificate"} onClick={handleLinkClick}>
                     certificate
                  </Link>
               </div>
               <div className='flex md:hidden  items-center'>
                  {mobileMenu ? <VscChromeClose onClick={closeMobileMenu} /> : <SlMenu onClick={openMobileMenu} />}
                  {mobileMenu && (
                     <div
                        className={`absolute  mt-4 right-0 top-[55px] bg-[#1e2328] w-full transition-transform duration-1000 ease-in transform ${
                           mobileMenu ? "top-20" : "top-[-420px]"
                        }`}
                     >
                        <div className='rounded flex  flex-col gap-y-12 py-4 px-8 text-2xl mb-4'>
                           <Link href={"/skills"} onClick={handleLinkClick}>
                              Skills
                           </Link>
                           <Link href={"/project"} onClick={handleLinkClick}>
                              Projects
                           </Link>
                           <Link href={"/resume"} onClick={handleLinkClick}>
                              Resume
                           </Link>
                           <Link href={"/certificate"} onClick={handleLinkClick}>
                              certificate
                           </Link>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Navbar;
