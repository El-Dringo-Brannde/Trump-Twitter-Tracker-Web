import React from 'react'
import SkewedContainer from "sc-react";
import * as axios from 'axios';

import Highcharts from 'highcharts';
import wordcloud from 'highcharts/modules/wordcloud';
wordcloud(Highcharts);


export default class WordCloud extends React.Component {
   constructor() {
      super()
   }
   
   componentDidMount() {
   }

   render() {
      return (
         <SkewedContainer
            top='left'
            bgColor="#03A9F4"
            noMargin
            className='about-me'
            style={{ width: '100%' }}>
            <div id='wordcloud' style={{ height: 800 }}></div>

         </SkewedContainer >
      )
   }
}

