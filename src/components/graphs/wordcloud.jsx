import React from 'react'
import SkewedContainer from "sc-react";

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import wordCloudConfig from './../../config/graphs/wordcloud'
import CenteredTabs from "./../nav/tabs";

export class WordCloud extends React.Component {
   componentDidUpdate() {
      if (this.props.data.length !== 0 && !this.props.isFetching)
         wordCloudConfig(this.props.data)
   }

   render() {
      return (
         <SkewedContainer
            bgColor="#03A9F4"
            noMargin
            style={{ marginTop: 50, width: '100%' }}>
            <CenteredTabs tabs={this.props.tabs} tabVal={this.props.tabVal} />
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