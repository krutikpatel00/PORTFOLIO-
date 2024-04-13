import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { useNavBarContext } from '../../context/NavBarProvider';

const Footer = () => {
      const { isNavOpen } = useNavBarContext()
      return (
            <div className={`${isNavOpen ? 'margin-st-24' : 'margin-st-64'} me-4 px-6 py-4 bg-[#040C10] rounded-md border-[.75px] border-[#fcfcfc0d] text-[#c0c0c0]`}>

                  <div className='flex justify-between items-center flex-wrap'>
                        <div className='lg:w-6/12 w-full text-center lg:text-start'>
                              <p>  © 2023 Copyright. All Rights Reserved.</p>
                        </div>
                        <div className='lg:w-6/12 w-full'>
                              <div className='flex lg:justify-end justify-center mt-2 lg:mt-0'>
                                    <a href="https://github.com/krutikpatel00" className='h-10 w-10  mx-2 border border-[#4bd8ff] text-[#4bd8ff]  rounded-md flex justify-center items-center'>
                                          <FaGithub className='text-2xl'></FaGithub>
                                    </a>
                                    <a href="https://www.linkedin.com/in/krutik-patel-63a79a275/" className='h-10 w-10  mx-2 border border-[#4bd8ff] text-[#4bd8ff]  rounded-md flex justify-center items-center'>
                                          <FaLinkedin className='text-2xl'></FaLinkedin>
                                    </a>
                                    <a href="https://www.instagram.com/krutik_patel_00" className='h-10 w-10  mx-2 border border-[#4bd8ff] text-[#4bd8ff]  rounded-md flex justify-center items-center'>
                                          <FiInstagram className='text-2xl'></FiInstagram>
                                    </a>
                                    <a href="https://twitter.com/krutikpatel00" className='h-10 w-10  mx-2 border border-[#4bd8ff] text-[#4bd8ff]  rounded-md flex justify-center items-center'>
                                          <FaTwitter className='text-2xl'></FaTwitter>
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>

      )
}

export default Footer