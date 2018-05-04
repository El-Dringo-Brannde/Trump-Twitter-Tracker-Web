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

   async componentDidMount() {
      let { data } = await axios.get('http://localhost:3005/words/all')
      Highcharts.chart('wordcloud', {
         chart: {
            backgroundColor: '#03A9F4'
         },
         series: [{
            type: 'wordcloud',
            data: data,
            name: 'Occurrences'
         }],
         title: {
            text: 'Most Common Words Trump Tweets'
         }
      });
   }

   render() {
      return (
         <SkewedContainer
            top='left'
            bgColor="#03A9F4"
            noMargin
            style={{ width: '100%' }}>
            <div id='wordcloud' style={{ marginBottom: 100 }}></div>

         </SkewedContainer >
      )
   }
}

