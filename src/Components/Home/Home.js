import React from 'react'
import Birds from '../../Animation/Birds'
import { useNavBarContext } from '../../context/NavBarProvider'


const Home = () => {
      const { isNavOpen } = useNavBarContext()
      return (
            <div className={`${isNavOpen ? ' margin-st-24' : 'margin-st-64'} me-4 relative h-screen`} >
                  <Birds />
                  <div className='text-white flex justify-center items-center h-screen'>
                        <div className='text-center'>
                              <h2 className=' text-2xl'>
                                    <span className='text-3xl'>H</span>
                                    ello I am</h2>
                              <h1 className='text-transparent lg:text-8xl text-6xl bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#0059ff]'>
                                    <span className='lg:text-9xl text-7xl'>K</span>
                                    <span>r</span>
                                    <span>u</span>
                                    <span>t</span>
                                    <span>i</span>
                                    <span>k</span>
                                    <span> </span>
                                    <span>P</span>
                                    <span>a</span>
                                    <span>t</span>
                                    <span>e</span>
                                    <span>l</span>
                              </h1>
                              <h3 className='text-3xl mt-1 title-h3'>
                                    <span className='text-4xl inline-block text-[#0080ff]'>F</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>r</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>o</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>n</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>t</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>e</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>n</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>t</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'> </span>
                                    <span className='text-4xl inline-block text-[#0080ff]'>D</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>e</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>v</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>e</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>l</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>o</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>p</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>e</span>
                                    <span className='text-3xl inline-block text-[#0080ff]'>r</span>

                              </h3>

                        </div>
                  </div>
            </div >

      )
}

export default Home