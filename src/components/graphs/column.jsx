import React from 'react'
import SkewedContainer from "sc-react";

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DatePickers from './../nav/datepicker'

import columnConfig from "./../../config/graphs/columns";

export default class Columns extends React.Component {
   componentDidUpdate() {
      if (this.props.data.length !== 0 && !this.props.isFetching) {
         this.props.columnConfig.data = this.props.data
         columnConfig(this.props.columnConfig)
      }
   }

   render() {
      const { columnConfig } = this.props
      return (
         <SkewedContainer
            bgColor="#F44336"
            noMargin
            style={{ marginTop: 50, width: '100%' }}>
            <DatePickers
               datePickers={this.props.datePickers} />
            {
               this.props.isFetching ?
                  <div style={{ marginTop: '15vh' }}>
                     <Grid
                        container
                        alignItems={'center'}
                        justify={'center'}
                     >
                        <CircularProgress size={150} />
                     </Grid>
                  </div>
                  :
                  <div style={{ marginTop: '15vh' }}>
                     <div id={columnConfig.containerID}></div>
                  </div>
            }
         </SkewedContainer>
      )
   }
}