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
      <div className='fixed w-full bg-white text-black'>
         <ContentWrapper>
            <div className='flex justify-between items-center text-base font-sans font-medium py-8 px-8'>
               <div>
                  <Link href={"/"}>
                     <h1>&copy; code by Madan</h1>
                  </Link>
               </div>
               <div className='md:flex hidden gap-x-12 capitalize'>
                  <Link href={"/skills"} onClick={handleLinkClick}>
                     Work
                  </Link>
                  <Link href={"/project"} onClick={handleLinkClick}>
                     Info
                  </Link>
                  <Link href={"/resume"} onClick={handleLinkClick}>
                     Resume
                  </Link>
                  <Link href={"/certificate"} onClick={handleLinkClick}>
                     Certificate
                  </Link>
               </div>
               <div className='flex md:hidden items-center'>
                  {mobileMenu ? <VscChromeClose onClick={toggleMobileMenu} /> : <SlMenu onClick={toggleMobileMenu} />}
               </div>
            </div>
            {mobileMenu && (
               <div
                  className={`absolute right-0 top-20 bg-white text-black w-full h-screen text-center  transition duration-1000 ease-in-out transform ${
                     mobileMenu ? "translate-y-0" : "-translate-y-full"
                  }`}
                  style={{ zIndex: 50 }}
               >
                  <div className='rounded flex flex-col gap-y-12 py-4 px-8 text-2xl mb-4'>
                     <Link href={"/skills"} onClick={handleLinkClick}>
                        Work
                     </Link>
                     <Link href={"/project"} onClick={handleLinkClick}>
                        Info
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
      </div>
   );
};

export default Navbar;
