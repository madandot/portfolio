"use client";
import React, { useState } from "react";
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

   return (
      <div className='fixed w-full h-20'>
         <ContentWrapper>
            <div className='flex justify-between items-center px-7 py-4 '>
               <div>
                  <Link href={"/"}>
                     <GiStarSattelites size={40} />
                  </Link>
               </div>
               <div className='md:flex hidden items-center gap-x-10 font-bold'>
                  <Link href={"/skills"}>Skills</Link>
                  <Link href={"/project"}>Projects</Link>
                  <Link href={"/about"}>About</Link>
               </div>
               <div className='flex md:hidden  items-center'>
                  {mobileMenu ? <VscChromeClose onClick={closeMobileMenu} /> : <SlMenu onClick={openMobileMenu} />}
                  {mobileMenu && (
                     <div
                        className={`absolute  mt-4 right-0 top-14 bg-[#0f1722] w-full transition-transform duration-1000 ease-in-out transform ${
                           mobileMenu ? "top-20" : "top-[-420px]"
                        }`}
                     >
                        <div className='rounded flex  flex-col gap-y-12 py-4 px-8 text-2xl'>
                           <Link href={"/skills"}>Skills</Link>
                           <Link href={"/project"}>Projects</Link>
                           <Link href={"/about"}>About</Link>
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
