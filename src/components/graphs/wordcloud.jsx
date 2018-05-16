import React from 'react'
import SkewedContainer from "sc-react";
import * as axios from 'axios';

import URL from './../../config/server'

import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';



import Highcharts from 'highcharts';
import wordcloud from 'highcharts/modules/wordcloud';
wordcloud(Highcharts);

export class WordCloud extends React.Component {
   componentDidUpdate() {
      if (this.props.data.length != 0)
         Highcharts.chart('wordcloud', {
            chart: {
               backgroundColor: '#03A9F4'
            },
            series: [{
               type: 'wordcloud',
               data: this.props.data,
               name: 'Occurrences'
            }],
            title: {
               text: 'Most Common Words Trump Tweets'
            }
         });
   }

   render() {
      console.log(this.props)
      return (
         <SkewedContainer
            top='left'
            bgColor="#03A9F4"
            noMargin
            style={{ width: '100%' }}>
            {
               this.props.isFetching ?
                  <Grid
                     container
                     alignItems={'center'}
                     justify={'center'}
                  >
                     <CircularProgress size={150} />
                  </Grid> 
                  :
                  <div id='wordcloud' style={{ marginBottom: 100 }}></div>
            }
         </SkewedContainer >
      )
   }
}

export default WordCloud