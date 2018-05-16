import React from 'react'
import SkewedContainer from "sc-react";
import * as axios from 'axios';

import URL from './../../config/server'

// import Highcharts from 'highcharts';
// import wordcloud from 'highcharts/modules/wordcloud';
// wordcloud(Highcharts);


// async componentDidMount() {
//    let { dispatch } = this.props
//    let { data } = await axios.get(`${URL}/words/all`)
//    dispatch(fetchData({ type: FETCH_DATA_START }))
//    Highcharts.chart('wordcloud', {
//       chart: {
//          backgroundColor: '#03A9F4'
//       },
//       series: [{
//          type: 'wordcloud',
//          data: data,
//          name: 'Occurrences'
//       }],
//       title: {
//          text: 'Most Common Words Trump Tweets'
//       }
//    });
// }

const WordCloud = (...props) => {
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

export default WordCloud