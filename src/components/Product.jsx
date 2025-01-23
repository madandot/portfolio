import React from "react";
import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import { FaMusic } from "react-icons/fa6";
import { IoMdMusicalNote } from "react-icons/io";
import { MdMusicOff } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import { GiMusicalScore } from "react-icons/gi";
import { LuKeyboardMusic } from "react-icons/lu";
import Link from "next/link";
import I1 from "../../public/images/Music/freepik__02.jpg";
import I2 from "../../public/images/Music/freepik__01.jpg";
import I3 from "../../public/images/Music/02.png";
import I4 from "../../public/images/Music/freepik__backgrou.jpg";
import I5 from "../../public/images/Music/120shots_so.png";
import I6 from "../../public/images/Music/835shots_so.png";
import I7 from "../../public/images/Music/923shots_so.png";
import I8 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View.png";
import I9 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (1).png";
import I10 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (2).png";
import I11 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (3).png";
import I12 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (5).png";
import I13 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (6).png";
import I14 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (7).png";
import I15 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (8).png";
import I16 from "../../public/images/mockups/iPhone 15 Pro Max Mockup, Front View (9).png";

const Product = () => {
   return (
      <div>
         <ContentWrapper>
            <div className='bg-white text-black'>
               <div className='min-h-screen max-w-7xl mx-auto px-2 lg:px-0 pb-8'>
                  <div>
                     <div className=' relative pt-24 h-[70vh]'>
                        <FaMusic
                           size={150}
                           className=' p-4 text-green-600 absolute lg:left-32 lg:top-20 right-0  shadow-2xl  rounded-full hover:shadow-green-600 transition-shadow duration-500 ease-in-out cursor-pointer  '
                        />
                        <IoMdMusicalNote
                           size={150}
                           className='  text-blue-700 lg:top-[180px] lg:right-60 bottom-0 absolute shadow-2xl  rounded-full hover:shadow-blue-600 transition-shadow duration-500 ease-in-out cursor-pointer '
                        />
                        <MdMusicOff
                           size={150}
                           className='  text-red-700 lg:bottom-[200px] lg:left-[500px] right-0 bottom-20 absolute shadow-2xl  rounded-full hover:shadow-red-600 transition-shadow duration-500 ease-in-out cursor-pointer '
                        />
                        <GiMusicalNotes
                           size={150}
                           className='  text-pink-700 lg:right-0 lg:bottom-8 absolute shadow-2xl top-64 rounded-full hover:shadow-pink-600 transition-shadow duration-500 ease-in-out cursor-pointer '
                        />
                        <GiMusicalScore
                           size={150}
                           className='text-black lg:bottom-10 lg:left-10 absolute shadow-2xl rounded-full hover:shadow-black transition-shadow duration-500 ease-in-out cursor-pointer'
                        />
                     </div>
                  </div>
                  <div className='py-8'>
                     <div className='flex justify-between border-t-2  border-b-2 border-black/50 font-{Dennis Sans, sans-serif} py-4 text-2xl text-[#27153e] '>
                        <div>
                           <h1>01</h1>
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
                           Introduction
                        </h1>
                        <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                           Users of the Musik app cannot view song lyrics, which diminishes their overall music-listening experience. This
                           missing feature impacts user engagement and weakens the apps competitive position in the market. To enhance user
                           satisfaction and provide a more immersive experience, it became clear that integrating a user-friendly lyrics
                           display feature that aligns with the apps design and functionality was essential.
                        </p>
                     </div>
                     <div className='border-b-2 border-black/50 my-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Problem Statement
                        </h1>
                        <ul className='list-disc px-4 font-{Dennis Sans, sans-serif} lg:text-xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e] '>
                           Current Situation:
                           <li className=' text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              Users cannot view lyrics within the Musik app.
                           </li>
                           <li className='  text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              This creates frustration as many users switch to external platforms to find lyrics, disrupting their
                              music-listening experience.
                           </li>
                        </ul>
                        <ul className='list-disc px-4 font-{Dennis Sans, sans-serif} lg:text-xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e] '>
                           Impact:
                           <li className=' text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              Reduced engagement and session time.
                           </li>
                           <li className='  text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              Competitive disadvantage compared to apps like Spotify and Apple Music.
                           </li>
                        </ul>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-2 -tracking-[1px] text-[#27153e]'>
                           Goal Statement:
                        </h1>
                        <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                           To design and integrate a lyrics display feature that enhances user engagement, improves app usability, and
                           aligns with user needs and expectations.
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
                     <div className=' my-2 py-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Previous design
                        </h1>
                        <div className='lg:flex'>
                           <Image src={I3} width={500} height={500} alt='home'></Image>
                           <p>Current design as it stands today</p>
                        </div>
                     </div>
                     <div className='border-b-2 border-black/50 my-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Process
                        </h1>
                        <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                           Users of the Musik app currently lack the ability to view song lyrics, which diminishes their overall music
                           listening experience. This missing feature impacts user engagement and weakens the apps competitive position in
                           the market. To enhance satisfaction and provide a more immersive experience, it is crucial to integrate a
                           user-friendly lyrics display feature that seamlessly aligns with the apps existing design and functionality.
                        </p>
                     </div>
                     <div className=' my-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Competitive Analysis
                        </h1>
                        <ul className='list-disc px-4 font-{Dennis Sans, sans-serif} lg:text-xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e] '>
                           Benchmarked Applications:
                           <li className=' text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              <strong>Spotify:</strong> Offers synced lyrics but lacks customization options.
                           </li>
                           <li className='  text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              <strong>Youtube Music:</strong> Focused on lyrics but lacks seamless integration with music playback.
                           </li>
                        </ul>
                        <ul className='list-disc px-4 font-{Dennis Sans, sans-serif} lg:text-xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e] '>
                           Opportunities Identified:
                           <li className=' text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              Provide a more visually appealing and customizable lyrics interface.
                           </li>
                           <li className='  text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              Enable offline access to lyrics.
                           </li>
                        </ul>
                     </div>
                     <div className='lg:flex gap-4 '>
                        <Image
                           src={I6}
                           width={500}
                           height={500}
                           className=' shadow-sm hover:shadow-2xl transition-shadow duration-500 ease-in-out rounded-md cursor-pointer'
                           alt='home'
                        ></Image>
                        <Image
                           src={I7}
                           width={500}
                           height={500}
                           className=' shadow-sm hover:shadow-2xl transition-shadow duration-500 ease-in-out rounded-md cursor-pointer'
                           alt='home'
                        ></Image>
                     </div>
                     <div className=' my-2'>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Contextual Inquiry
                        </h1>
                        <ul>
                           <li className=' text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              <strong>Objective:</strong>Observe and understand how users currently interact with music apps when looking
                              for lyrics.
                           </li>
                        </ul>
                        <ul className='list-disc px-4 font-{Dennis Sans, sans-serif} lg:text-xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e] '>
                           Findings:
                           <li className=' text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              A significant percentage of users leave the app to search for lyrics, disrupting their listening experience.
                           </li>
                           <li className=' text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              Roughly 5 million people search for song lyrics on Google every day, highlighting the high demand for this
                              type of content. This shows that users actively seek lyrics but often have to rely on external sources,
                              presenting an opportunity for the Musik app to fulfill this need in-app.
                           </li>
                           <li className='  text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl text-base font-{Dennis Sans, sans-serif} '>
                              Switching between apps was disruptive and reduced overall satisfaction.
                           </li>
                        </ul>
                     </div>
                     <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                        Paper Work
                     </h1>
                     <div className='lg:flex'>
                        <Image src={I1} width={500} height={500} alt='home'></Image>
                        <Image src={I2} width={500} height={500} alt='home'></Image>
                        <Image src={I4} width={500} height={500} alt='home'></Image>
                     </div>
                     <div>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           MockUps
                        </h1>
                     </div>
                     <div>
                        <div className='grid lg:grid-cols-4 grid-cols-2'>
                           <Image src={I8} width={500} height={500} alt='home'></Image>
                           <Image src={I9} width={500} height={500} alt='home'></Image>
                           <Image src={I10} width={500} height={500} alt='home'></Image>
                           <Image src={I11} width={500} height={500} alt='home'></Image>
                           <Image src={I15} width={500} height={500} alt='home'></Image>
                           <Image src={I12} width={500} height={500} alt='home'></Image>
                           <Image src={I13} width={500} height={500} alt='home'></Image>
                           <Image src={I14} width={500} height={500} alt='home'></Image>
                        </div>
                     </div>
                     <div>
                        <h1 className='font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           Feature requirement
                        </h1>
                        <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}'>
                           Using the design below as your starting point, create a version that includes this new product feature: <br />{" "}
                           Allow the user to view the lyrics on the music player screen
                        </p>
                     </div>
                     <div className='flex'>
                        <div>
                           <h1 className=' capitalize font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                              Exploration
                           </h1>
                           <div className='grid lg:grid-cols-4 grid-cols-2'>
                              <Image src={I10} width={500} height={500} alt='home'></Image>
                              <Image src={I11} width={500} height={500} alt='home'></Image>
                              <Image src={I15} width={500} height={500} alt='home'></Image>
                              <Image src={I13} width={500} height={500} alt='home'></Image>
                           </div>
                        </div>
                     </div>
                     <div>
                        <h1 className=' capitalize font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                           FINAL DESIGN
                        </h1>
                        <div>
                           <div className='grid grid-cols-2 justify-items-center'>
                              <Image src={I11} width={500} height={500} alt='home'></Image>
                              <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif} flex justify-center items-center'>
                                 When the user clicks on the lyrics button, the lyrics screen transitions smoothly, ensuring that the lyrics
                                 are easily accessible without cluttering the main music player interface. This intuitive design allows
                                 users to view the song lyrics while enjoying their favorite tracks. The toggle functionality accommodates
                                 diverse user preferences, offering both flexibility and convenience.
                              </p>
                           </div>
                           <div className='grid grid-cols-2 justify-items-center'>
                              <Image src={I13} width={500} height={500} alt='home'></Image>
                              <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif}  flex justify-center items-center'>
                                 When the user clicks anywhere on the lyrics screen, it will disappear, smoothly transitioning back to the
                                 home page. This intuitive interaction enables users to effortlessly toggle between viewing the lyrics and
                                 returning to the main interface. The design ensures a fluid and engaging user experience, maintaining
                                 seamless transitions between views.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div>
                     <h1 className=' capitalize font-{Dennis Sans, sans-serif} lg:text-4xl text-xl font-semibold my-5 -tracking-[1px] text-[#27153e]'>
                        Conclusion{" "}
                     </h1>
                     <p className=' mb-4 text-[#00000090] font-normal leading-[30px] -tracking-[0.4px] lg:text-xl font-{Dennis Sans, sans-serif} '>
                        The Musik app has greatly enhanced its user experience and competitive edge in the market by introducing a lyrics
                        display feature. This case study emphasizes the significance of user-centric design and demonstrates a
                        well-considered approach to addressing real-world challenges through research, ideation, and implementation. 
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
                           href={"/skills"}
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
            </div>
         </ContentWrapper>
      </div>
   );
};

export default Product;
