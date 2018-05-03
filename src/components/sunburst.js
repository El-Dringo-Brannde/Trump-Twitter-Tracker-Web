import React from 'react'
import SkewedContainer from "sc-react";


const SunBurst = () => {
   return (
      <SkewedContainer
         top='right'
         bottom="left"
         bgColor="#9C27B0"
         noMargin
         className='about-me'
         style={{ width: '100%' }}>
         <div style={{ height: 700 }}></div>
      </SkewedContainer>
   )
}

export default SunBurst