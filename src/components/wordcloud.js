import React from 'react'
import SkewedContainer from "sc-react";


const WordCloud = () => {
   return (
      <SkewedContainer
         top='left'
         bgColor="#03A9F4"
         noMargin
         className='about-me'
         style={{ width: '100%' }}>
         <div style={{ height: 700 }}></div>
      </SkewedContainer>
   )
}

export default WordCloud