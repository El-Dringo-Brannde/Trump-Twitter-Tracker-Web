import React from 'react'
import SkewedContainer from "sc-react";

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DatePickers from './../nav/datepicker'

import heatMapConfig from "./../../config/graphs/heatmap";

export default class HeatMap extends React.Component {
   componentDidUpdate() {
      if (this.props.data.length !== 0 && !this.props.isFetching)
         heatMapConfig(this.props.data)
   }

   render() {
      return (
         <SkewedContainer
            bgColor="#F44336"
            noMargin
            className='about-me'
            style={{ marginTop: 50, width: '100%' }}>
            <Grid
               container
               alignItems={'center'}
               justify={'center'}>
               <DatePickers datePickers={this.props.datePickers} />
            </Grid>
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

