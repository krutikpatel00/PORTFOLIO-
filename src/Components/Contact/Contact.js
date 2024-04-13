import React, { useContext, useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useNavBarContext } from '../../context/NavBarProvider';
import { firebaseContext } from '../../context/FirebaseProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
      const { isNavOpen } = useNavBarContext()
      const { DataSubmit } = useContext(firebaseContext)
      const [fromData, setFromData] = useState({})

      const getInputValue = (e) => {
            const name = e.target.name
            const value = e.target.value
            const data = { ...fromData, [name]: value }
            setFromData(data)
      }
      const FromSubmit = (e) => {
            e.preventDefault();
            DataSubmit(fromData)
            setFromData({})

      }
      return (
            <div className={`${isNavOpen ? ' margin-st-24' : 'margin-st-64'}  me-4`}>
                  <div className='py-8 text-end'>
                        <h2 className=' text-4xl sm:text-6xl relative before:absolute before:top-1/4 before:-right-8 before:w-8 before:h-2 before:bg-[#00aaff29] rounded-xl bg-[#00aaff29]  inline-block py-6 px-10 text-white text-end me-4  after:absolute after:bottom-1/4 after:-right-8 after:w-8 after:h-2 after:bg-[#00aaff29] border before:border after:border border-[#fcfcfc0d] before:border-[#fcfcfc0d] after:border-[#fcfcfc0d]'>Contact Us</h2>
                  </div>
                  <div className="flex flex-wrap mb-12">
                        <div className=" w-full lg:w-6/12">
                              <div className='p-8 lg:mx-2 bg-[#007dbb26] rounded-xl mb-8 lg:mb-0'>
                                    <h2 className='text-white text-4xl pb-8 '>Get In Touch</h2>
                                    <form action="" method='post' onSubmit={(e) => FromSubmit(e)}>
                                          <label htmlFor="" className='mb-1 inline-block text-white text-lg'>Name :</label>
                                          <input
                                                type="text"
                                                name='name'
                                                placeholder='Enter Name'
                                                className='w-full px-4 mb-6 outline-none border-none text-[#00aaff] py-2 rounded-md bg-[#00aaff61] '
                                                value={fromData.name ? fromData.name : ''}
                                                onChange={(e) => getInputValue(e)}
                                                required
                                          />
                                          <label htmlFor="" className='mb-1 inline-block text-white text-lg'>Email :</label>
                                          <input
                                                type="email"
                                                placeholder='Enter your email address'
                                                name='email'
                                                className='w-full px-4 mb-6 outline-none border-none text-[#00aaff] py-2 rounded-md bg-[#00aaff61] '
                                                value={fromData.email ? fromData.email : ''}
                                                onChange={(e) => getInputValue(e)}
                                                required
                                          />
                                          <label htmlFor="" className='mb-1 inline-block text-white text-lg'>Phone Nubmer :</label>
                                          <input
                                                type="number"
                                                name='phonenumber'
                                                placeholder='0000000000'
                                                pattern='[0-9]{10}'
                                                className='w-full px-4 mb-6 outline-none border-none text-[#00aaff] py-2 rounded-md bg-[#00aaff61] '
                                                value={fromData.phonenumber ? fromData.phonenumber : ''}
                                                onChange={(e) => getInputValue(e)}
                                                required
                                          />
                                          <label htmlFor="" className='mb-1 inline-block text-white text-lg'>Message :</label>
                                          <textarea
                                                name="message"
                                                className='w-full px-4 mb-6 outline-none border-none text-[#00aaff] py-2 rounded-md bg-[#00aaff61] '
                                                cols="20"
                                                rows="6"
                                                placeholder='Enter message'
                                                value={fromData.message ? fromData.message : ''}
                                                onChange={(e) => getInputValue(e)}
                                                required
                                          ></textarea>
                                          <button type='submit' className='py-2 px-10 bg-[#00aaff] text-white rounded-lg'>Submit</button>
                                    </form>

                              </div>
                        </div>
                        <div className=" w-full lg:w-6/12">
                              <div className='p-8 lg:mx-2 bg-[#007dbb26] rounded-xl'>
                                    <h2 className='text-white text-4xl pb-8 '>Contact Us</h2>
                                    <div className="flex flex-wrap mx-2">
                                          <div className='w-full'>
                                                <div className='flex bg-[#00aaff61] rounded-lg my-2 p-4 items-center justify-center text-[#c0c0c0]'>
                                                      <MdEmail className='text-[#00aaff] text-2xl'></MdEmail>
                                                      <p className='text-lg ms-2'>krutikpatel0214@gmail.com</p>
                                                </div>
                                          </div>
                                          <div className='w-full'>
                                                <div className='flex bg-[#00aaff61] rounded-lg my-2 p-4 items-center justify-center text-[#c0c0c0]'>
                                                      <FaPhoneAlt className='text-[#00aaff] text-2xl'></FaPhoneAlt>
                                                      <p className='text-lg ms-2'>+91 90233 43844</p>
                                                </div>
                                          </div>
                                          <div className='w-full'>
                                                <div className='flex bg-[#00aaff61] rounded-lg my-2 p-4 items-center justify-center text-[#c0c0c0]'>
                                                      <FaLocationDot className='text-[#00aaff] text-2xl'></FaLocationDot>
                                                      <p className='text-lg ms-2'>Surat , Gujarat</p>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='flex flex-wrap'>
                                          <div className='w-full sm:w-6/12'>
                                                <div className='p-4 m-2 rounded-lg bg-[#00aaff61]'>
                                                      <a href='https://github.com/krutikpatel00' target='_black' className='block'>
                                                            <img src='./Image/code.png' className='w-20 mx-auto' alt="" />
                                                            <h2 className='text-xl pt-2 text-[#c0c0c0] text-center'>GitHub</h2>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className='w-full sm:w-6/12'>
                                                <div className='p-4 m-2 rounded-lg bg-[#00aaff61]'>
                                                      <a href='https://twitter.com/krutikpatel00' target='_black' className='block'>
                                                            <img src='../../Image/twitter.png' className='w-20 mx-auto' alt="" />
                                                            <h2 className='text-xl pt-2 text-[#c0c0c0] text-center'>Twitter</h2>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className='w-full sm:w-6/12'>
                                                <div className='p-4 m-2 rounded-lg bg-[#00aaff61]'>
                                                      <a href='https://www.instagram.com/krutik_patel_00' target='_black' className='block'>
                                                            <img src='../../Image/instagram.png' className='w-20 mx-auto' alt="" />
                                                            <h2 className='text-xl pt-2 text-[#c0c0c0] text-center'>Instagram</h2>
                                                      </a>
                                                </div>
                                          </div>
                                          <div className='w-full sm:w-6/12'>
                                                <div className='p-4 m-2 rounded-lg bg-[#00aaff61]'>
                                                      <a href='https://www.linkedin.com/in/krutik-patel-63a79a275/' target='_black' className='block'>
                                                            <img src='../../Image/linkedin.png' className='w-20 mx-auto' alt="" />
                                                            <h2 className='text-xl pt-2 text-[#c0c0c0] text-center'>Linkedin</h2>
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <ToastContainer />
            </div>
      )
}

export default Contact