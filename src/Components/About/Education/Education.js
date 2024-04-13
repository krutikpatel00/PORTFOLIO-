import React from 'react'
import { useNavBarContext } from '../../../context/NavBarProvider'

const Education = () => {
      const { isNavOpen } = useNavBarContext()
      return (
            <div className={`${isNavOpen ? ' margin-st-24' : 'margin-st-64'}  me-4 py-2 font-["Signika"]`}>
                  <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 ">
                              <div className="education-items">
                                    <ul className='flex flex-col sm:flex-row  sm:justify-between sm:items-center p-4 bg-[#041722] border border-[#fcfcfc0d] m-2 text-[#c0c0c0] rounded-md'>
                                          <li>
                                                <h2 className='text-2xl pb-2'>Front-End Web Development</h2>
                                                <p className='text-[14px]'>RED AND WHITE MULTIMEDIA EDUCATION NANPURA SURAT</p>
                                          </li>
                                          <li>
                                                <p className='text-md mt-1 sm:mt-0'>2023 - 2024</p>
                                          </li>
                                    </ul>

                              </div>
                        </div>
                        <div className="w-full lg:w-6/12">
                              <div className="education-items">
                                    <ul className='flex flex-col sm:flex-row  sm:justify-between sm:items-center p-4 bg-[#041722] border border-[#fcfcfc0d] m-2 text-[#c0c0c0] rounded-md'>
                                          <li>
                                                <h2 className='text-2xl pb-2'>B.Com</h2>
                                                <p className='text-[14px]'>J J KUNDALIYA ARTS COM&BBA, COLLEGE,RAJKOT</p>
                                          </li>
                                          <li>
                                                <p className='text-md mt-1 sm:mt-0'>2019 - 2022</p>
                                          </li>
                                    </ul>

                              </div>
                        </div>
                        <div className="w-full lg:w-6/12">
                              <div className="education-items">
                                    <ul className='flex flex-col sm:flex-row  sm:justify-between sm:items-center p-4 bg-[#041722] border border-[#fcfcfc0d] m-2 text-[#c0c0c0] rounded-md'>
                                          <li>
                                                <h2 className='text-2xl pb-2'>HSC</h2>
                                                <p className='text-[14px]'>SIGMA SCHOOL OF SCIENCE SAVARKUNDLA</p>
                                          </li>
                                          <li>
                                                <p className='text-md mt-1 sm:mt-0'>2018 - 2019</p>
                                          </li>
                                    </ul>

                              </div>
                        </div>
                        <div className="w-full lg:w-6/12">
                              <div className="education-items">
                                    <ul className='flex flex-col sm:flex-row  sm:justify-between sm:items-center p-4 bg-[#041722] border border-[#fcfcfc0d] m-2 text-[#c0c0c0] rounded-md'>
                                          <li>
                                                <h2 className='text-2xl pb-2'>SSC</h2>
                                                <p className='text-[14px]'>SIGMA SCHOOL OF SCIENCE SAVARKUNDLA</p>
                                          </li>
                                          <li>
                                                <p className='text-md mt-1 sm:mt-0'>2016 - 2017</p>
                                          </li>
                                    </ul>

                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Education