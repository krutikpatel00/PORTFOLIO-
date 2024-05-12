import React from 'react'
import { useNavBarContext } from '../../../context/NavBarProvider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Skills = () => {
      const { isNavOpen } = useNavBarContext();

     
      return (
            <div className={`${isNavOpen ? 'margin-st-24' : 'margin-st-64'} py-2 font-["Signika"]`}>
                  <div className="container mx-auto px-4">
                        <div className="skills-inner">
                              <div className="flex flex-wrap">
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-html-240.png'} alt='img1' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      HTML5</h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-css-240.png'} alt='img' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      CSS3</h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-js-240.png'} alt='js' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      JAVASCRIPT
                                                </h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-sass-240.png'}
                                                      alt='sass' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      SASS</h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-bootstrap-240.png'} alt='bootstrap' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      BOOTSTRAP</h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-tailwind-css-240.png'} alt='css' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      TAILWINDCSS
                                                </h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/jquery-1.png'} alt='jquery' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      J-QUERY</h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-react-native-240.png'} alt='react' className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      REACT</h4>
                                          </div>
                                    </div>
                                    <div className="2xl:w-4/12 lg:w-1/2 w-full">
                                          <div className="skills-img hover:bg-[#041722] duration-300 border flex flex-col justify-center items-center lg:flex-row lg:justify-start m-2  border-[#fcfcfc0d] p-4 rounded-xl">
                                                <img src={'./Image/icons8-git-480.png'} alt="icons8-git-480" title="git" className="w-28" />
                                                <h4 className="text-3xl text-[#D9D9D9] hover:text-white duration-300 font-semibold lg:ms-8">
                                                      GIT</h4>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Skills