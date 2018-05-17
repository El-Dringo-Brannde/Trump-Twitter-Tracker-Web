import React from 'react'
import SkewedContainer from "sc-react";

import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

import wordCloudConfig from './../../config/graphs/wordcloud'

export class WordCloud extends React.Component {
   componentDidUpdate() {
      if (this.props.data.length !== 0)
         wordCloudConfig(this.props.data)
   }

   render() {
      return (
         <SkewedContainer
            top='left'
            bgColor="#03A9F4"
            noMargin
            style={{ marginTop: 50, width: '100%' }}>
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