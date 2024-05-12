import React, { useContext, useState } from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { useEffect } from 'react';
import { useNavBarContext } from '../../context/NavBarProvider';
import { collection, getDocs } from 'firebase/firestore';
import { fireStore } from '../../Firebase/Firebase';
import { firebaseContext } from '../../context/FirebaseProvider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

const Portfolio = () => {

      const { isNavOpen } = useNavBarContext()
      const [myProject, setMyProject] = useState([])
      const [isLoading, setisLoading] = useState(true)
      const [Error, setError] = useState(null)

      const progrming = ['ALL', 'CSS-HTML-JS', 'TAILWINDCSS', 'BOOTSTRAP', 'SASS', 'JQUERY', 'REACT']

      const { getUplodeImage } = useContext(firebaseContext)
      useEffect(() => {
            myProjectData()
      }, [])
      gsap.registerPlugin(ScrollTrigger)

      useGSAP(() => {
            gsap.from('.portfolio-tgsape h2', {
                  x: -100,
                  opacity: 0,
                  direction: 1,
                  delay: 0.5
            })
            gsap.from('.project-card', {
                  scale: 0,
                  direction: 1,
                  delay: 0.5,
                  scrollTrigger: {
                        trigger: '.project-card',
                        scroller: 'body',
                  },
                  stagger: 0.5
            })
      }, [setMyProject, setisLoading])

      const myProjectData = async () => {
            setisLoading(true)
            try {
                  let project = await getDocs(collection(fireStore, 'projects'))
                  let myprojects = []
                  project.forEach((project) => {
                        let pro = project.data();
                        pro.id = project.id;
                        // Get only one image per project
                        getUplodeImage(pro.Image).then(img => {
                              pro.DownImage = img;
                              myprojects.push(pro);
                              setMyProject([...myprojects]);
                              setisLoading(false)
                        });
                  });
            } catch (error) {
                  setError(error.message)
            }
      }

      const selectDataProject = async (items) => {
            setisLoading(true)
            try {
                  let project = await getDocs(collection(fireStore, 'projects'))
                  let myprojects = []
                  project.forEach((project) => {
                        let pro = project.data();
                        pro.id = project.id;
                        getUplodeImage(pro.Image).then(img => {
                              pro.DownImage = img;
                              if ('ALL' === items) {
                                    myprojects.push(pro);
                              } else {
                                    if (pro.languages === items) {
                                          myprojects.push(pro);
                                    }
                              }

                              setMyProject([...myprojects]);
                              setisLoading(false)
                        });
                  });
            } catch (error) {
                  setError(error.message)
            }
      }


      if (Error) {
            return (
                  <div className='text-center w-full'>
                        <h2 className='text-[#00aaffb5] text-4xl text-center py-8'>{Error}</h2>
                  </div>
            )
      }

      return (
            <div className={`${isNavOpen ? ' margin-st-24' : 'margin-st-64'}  pe-4`}>
                  <div className='py-8 text-end portfolio-title'>
                        <h2 className=' text-4xl sm:text-6xl relative before:absolute before:top-1/4 before:-right-8 before:w-8 before:h-2 before:bg-[#00aaff29] rounded-xl bg-[#00aaff29]  inline-block py-6 px-10 text-white text-end me-4  after:absolute after:bottom-1/4 after:-right-8 after:w-8 after:h-2 after:bg-[#00aaff29]  border before:border after:border border-[#fcfcfc0d] before:border-[#fcfcfc0d] after:border-[#fcfcfc0d]'>Project</h2>
                  </div>
                  <div className='flex flex-wrap py-6'>
                        {
                              progrming.map((items, i) => {
                                    return (
                                          <button key={i} onClick={() => selectDataProject(items)} className='py-1 text-sm rounded-md  px-6 bg-[#00aaffb5] mx-2 my-1 text-white'>{items}</button>
                                    )
                              })
                        }
                  </div>
                  <div className="flex flex-wrap">
                        {
                              isLoading ? <div className='text-center w-full'>
                                    <h2 className='text-[#00aaffb5] text-4xl text-center py-8'>Loading...</h2>
                              </div>
                                    : <>
                                          {
                                                myProject.reverse().map((items, pos) => {
                                                      return (

                                                            <div className="w-full md:w-6/12 lg:w-3/12 " key={pos} >
                                                                  <div className="project-card relative h-[300px] m-1 rounded-2xl">
                                                                        <img src={items.DownImage} className='h-full object-cover rounded-2xl' alt="" />
                                                                        <div className="project-card-items absolute top-0 left-0 right-0 bottom-0">
                                                                              <h2 className="project-title absolute top-5 text-xl py-2 px-6 rounded-xl text-[#00aaff]">{items.ProjectName}</h2>
                                                                              <div className="project-icon flex justify-center items-center h-full">
                                                                                    <a href={items.GitUrl} className='w-10 h-10 text-3xl flex justify-center items-center bg-[#00aaff] text-white rounded-md m-2'>
                                                                                          <FaGithubSquare />
                                                                                    </a>
                                                                                    <a href={items.ViewUrl} className='w-10 h-10 text-3xl flex justify-center items-center bg-[#00aaff] text-white rounded-md m-2' ><GrView /></a>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      )
                                                })
                                          }</>
                        }


                  </div>
            </div>
      )
}

export default Portfolio