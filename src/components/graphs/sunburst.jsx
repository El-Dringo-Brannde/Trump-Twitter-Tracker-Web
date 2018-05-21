import React from 'react'
import SkewedContainer from "sc-react";

import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

import sunBurstConfig from './../../config/graphs/sunburst'

export default class SunBurst extends React.Component {
   async componentDidUpdate() {
      if (this.props.data.length !== 0)
         sunBurstConfig(this.props.data)
   }

   render() {
      return (
         <SkewedContainer
            top='right'
            bottom="left"
            bgColor="#9C27B0"
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
                  <div id='sunburst' style={{ marginBottom: 100 }} ></div>
            }
         </SkewedContainer>
      )
   }
}

