import React from 'react'
import { useNavBarContext } from '../../../context/NavBarProvider'

const Experiece = () => {
  const { isNavOpen } = useNavBarContext()
  return (
    <div className={`${isNavOpen ? 'margin-st-24' : 'margin-st-64'} me-4 font-["Signika"]`}>
      <h2 className='flex flex-col sm:flex-row  sm:justify-between sm:items-center p-4 bg-[#041722] border border-[#fcfcfc0d] m-2 text-[#c0c0c0] rounded-md'>Freasher</h2>
    </div>
  )
}

export default Experiece