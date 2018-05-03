import React from 'react'
import SkewedContainer from "sc-react";


const HeatMap = () => {
   return (
      <SkewedContainer
         bottom="left"
         bgColor="#F44336"
         noMargin
         className='about-me'
         style={{ width: '100%' }}>
         <div style={{ height: 700 }}></div>
      </SkewedContainer>
   )
}

export default HeatMap