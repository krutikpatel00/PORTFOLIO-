import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import { VANTA } from 'vanta'

const Birds = () => {
      const [vantaEffect, setVantaEffect] = useState(null)
      const myRef = useRef(null)
      VANTA.BIRDS({
            el: ".birds",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 0,
            minWidth: 0,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: null,
            color1: 0xc78cb,
            color2: 0x3d2e5b
      });
      useEffect(() => {
            if (!vantaEffect) {
                  setVantaEffect(BIRDS({
                        el: myRef.current
                  }))
            }
            return () => {
                  if (vantaEffect) vantaEffect.destroy()
            }
      }, [setVantaEffect])

      return <div className='birds' ref={myRef}>

      </div>
}

export default Birds