import React from 'react'
import SkewedContainer from "sc-react";

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DatePickers from './../nav/datepicker'

import sunBurstConfig from './../../config/graphs/sunburst'
import { Paper } from '@material-ui/core';


export default class SunBurst extends React.Component {
   async componentDidUpdate(prevProps, prevState) {
      if (this.props.data.length != 0 && !this.props.isFetching)
         sunBurstConfig(this.props.data)
   }

   render() {
      return (
         <SkewedContainer
            bgColor="#9C27B0"
            noMargin
            style={{ marginTop: 50, width: '100%' }}>
            <Grid
               container
               alignItems={'center'}
               justify={'center'}
            >
               <Paper style={{ margin: 50, padding: 25 }} >
                  <DatePickers datePickers={this.props.datePickers} />
               </Paper>
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
                  <div id='sunburst' style={{ marginBottom: 100 }} ></div>
            }
         </SkewedContainer>
      )
   }
}

