import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBirthdayCake } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

import { FaPhoneAlt } from "react-icons/fa";
import { useNavBarContext } from '../../context/NavBarProvider';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const About = () => {
      const { isNavOpen } = useNavBarContext()

      let tl = gsap.timeline()
      useGSAP(() => {
            tl.from('.about-title h2', {
                  x: -100,
                  opacity: 0,
                  direction: 0.5,
                  delay: 0.5

            })

            tl.from('.about-img', {
                  x: -200,
                  opacity: 0,
                  direction: 0.5,
                  delay: 0.5
            })
            tl.from('.about-container', {
                  x: 40,
                  opacity: 0,
                  direction: 0.5,
                  delay: 0.5

            })
            tl.from('.about-basic-items', {
                  scale: 0,
                  opacity: 0,
                  direction: 0.5,
                  delay: 0.5,
                  stagger: 0.5
            })
      }, {})

      return (

            <div className={`${isNavOpen ? 'margin-st-24' : 'margin-st-64'} mx-4`} >
                  <div className='py-8 text-end about-title'>
                        <h2 className=' text-4xl sm:text-6xl relative before:absolute before:top-1/4 before:-right-8 before:w-8 before:h-2 before:bg-[#00aaff29] rounded-xl bg-[#00aaff29]  inline-block py-6 px-10 text-white text-end me-4  after:absolute after:bottom-1/4 after:-right-8 after:w-8 after:h-2 after:bg-[#00aaff29] border before:border after:border border-[#fcfcfc0d] before:border-[#fcfcfc0d] after:border-[#fcfcfc0d]'>About</h2>
                  </div>
                  <div className="flex flex-wrap items-center">
                        <div className='w-full lg:w-4/12'>
                              <div className="about-img p-4 lg:ms-2 rounded-md  bg-[#041722] border border-[#fcfcfc0d]">
                                    <img src="../../Image/profile-img.jpg" alt="profileimg" className='rounded-md ' />
                              </div>
                        </div>
                        <div className="w-full lg:w-8/12">
                              <div className='about-container rounded-md p-4 lg:me-2 lg:ms-4 mt-4 lg:mt-0 bg-[#041722]  border border-[#fcfcfc0d]'>
                                    <h2 className='text-4xl text-[#F9F9F9]'>Frontend Developer</h2>
                                    <p className='text-[#c0c0c0] my-4'>Front-end developers typically work with technologies such as HTML, CSS, and JavaScript frameworks like React or Vue.js to build interactive and responsive user interfaces. They also collaborate closely with back-end developers to integrate the front-end with the server</p>
                                    <a href='./document/krutikpatel.pdf' className='btn-theme'>Download CV</a>
                              </div>
                              <div className='flex flex-wrap mt-4'>
                                    <div className="w-full md:w-6/12">
                                          <div className="about-basic-items bg-[#041722] m-2 lg:ms-4 p-4 rounded-md border border-[#fcfcfc0d]">
                                                <ul className='flex items-center'>
                                                      <li>
                                                            <FaBirthdayCake className='text-[#00aaffd5] text-3xl me-3' />
                                                      </li>
                                                      <li>
                                                            <span className='inline-block text-[#c0c0c0]'>Birthday</span>
                                                            <h2 className='text-[#c0c0c0] text-xl'>7 Oct ,2001</h2>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="w-full md:w-6/12">
                                          <div className="about-basic-items bg-[#041722] m-2 lg:ms-4 p-4 rounded-md border border-[#fcfcfc0d]">
                                                <ul className='flex items-center'>
                                                      <li>
                                                            <FaLocationDot className='text-[#00aaffd5] text-3xl me-3' />
                                                      </li>
                                                      <li>
                                                            <span className='inline-block text-[#c0c0c0]'>Address</span>
                                                            <h2 className='text-[#c0c0c0] text-xl'>Surat , Gujarat</h2>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="w-full md:w-6/12">
                                          <div className="about-basic-items bg-[#041722] m-2 lg:ms-4 p-4 rounded-md border border-[#fcfcfc0d]">
                                                <ul className='flex items-center'>
                                                      <li>
                                                            <FaPhoneAlt className='text-[#00aaffd5] text-3xl me-3' />
                                                      </li>
                                                      <li>
                                                            <span className='inline-block text-[#c0c0c0]'>Phone</span>
                                                            <h2 className='text-[#c0c0c0] text-xl'>+91 90233 43844 </h2>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="w-full md:w-6/12">
                                          <div className="about-basic-items bg-[#041722] m-2 lg:ms-4 p-4 rounded-md border border-[#fcfcfc0d]">
                                                <ul className='flex items-center'>
                                                      <li>
                                                            <FaGraduationCap className='text-[#00aaffd5] text-3xl me-3' />
                                                      </li>
                                                      <li>
                                                            <span className='inline-block text-[#c0c0c0]'>Experience</span>
                                                            <h2 className='text-[#c0c0c0] text-xl'>Fresher
                                                            </h2>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className='pt-14 mb-4 mx-2'>
                        <ul className='flex flex-wrap'>
                              <li>
                                    <NavLink to='/about' className='inline-block text-white bg-[#00aaffd5] my-1 rounded-[100px] me-4 py-1 px-6'>SKILLS</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/about/education' className='inline-block text-white my-1 bg-[#00aaffd5] rounded-[100px] me-4 py-1 px-6'>EDUCATION</NavLink>
                              </li>
                              <li>
                                    <NavLink to='/about/experiece' className='inline-block text-white my-1 bg-[#00aaffd5] rounded-[100px] me-4 py-1 px-6'>EXPERIENCE</NavLink>
                              </li>
                        </ul>
                  </div>
            </div>
      )
}

export default About