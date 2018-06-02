import React from 'react'
import SkewedContainer from "sc-react";

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DatePickers from './../nav/datepicker'
import { Paper } from '@material-ui/core';

import columnConfig from "./../../config/graphs/columns";

export default class Columns extends React.Component {
   componentDidUpdate() {
      console.log(this.props)
      if (this.props.data && this.props.data.length !== 0 && !this.props.isFetching)
         columnConfig(this.props.data)
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
                  <div id={this.props.label}></div>
            }
         </SkewedContainer>
      )
   }
}

