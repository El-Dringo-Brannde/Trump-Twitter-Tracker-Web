import React from 'react'
import SkewedContainer from "sc-react";
import Highcharts from 'highcharts'
import * as axios from 'axios';


let data = [{
   name: 'foo',
   weight: 5
},{
   name: 'bar',
   weight: 2
}]
export default class HeatMap extends React.Component {
   state = {
      data: []
   }
   constructor(){
      super()
      this.buildChart()
   }

   buildChart(){
   }

   render(){  
      return (
         <SkewedContainer
            bottom="left"
            bgColor="#F44336"
            noMargin
            className='about-me'
            style={{ width: '100%' }}>
            <div style={{ height: 700 }} id = 'heatmap'></div>
         </SkewedContainer>
      )
   }
}

