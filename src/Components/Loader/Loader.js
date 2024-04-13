import React from 'react'

const Loader = () => {

      return (
            <div className='bg-[#040404]  fixed w-full h-full top-0 left-0 right-0 bottom-0 anmtion-loader'>
                  <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  '>
                        <div className="reverse-spinner"></div>
                  </div>
            </div>
      )
}

export default Loader