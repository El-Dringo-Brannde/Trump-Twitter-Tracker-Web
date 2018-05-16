import React from 'react'
import SkewedContainer from "sc-react";

import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

import heatMapConfig from "./../../config/graphs/heatmap";

export default class HeatMap extends React.Component {
   componentDidUpdate() {
      if (this.props.data.length != 0)
         heatMapConfig(this.props.data)
   }

   render() {
      return (
         <SkewedContainer
            top="left"
            bgColor="#F44336"
            noMargin
            className='about-me'
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
                  <div id='heatmap'></div>
            }
         </SkewedContainer>
      )
   }
}

