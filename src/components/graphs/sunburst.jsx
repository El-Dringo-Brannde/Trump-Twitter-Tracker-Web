import React from 'react'
import SkewedContainer from "sc-react";

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

import sunBurstConfig from './../../config/graphs/sunburst'

export default class SunBurst extends React.Component {
   async componentDidUpdate(prevProps, prevState) {
      if (this.props.data.length != 0)
         sunBurstConfig(this.props.data)
   }


   render() {
      return (
         <SkewedContainer
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

