import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from './../redux/heatmap/actions';

import HeatMap from "./../components/graphs/heatmap";
import * as moment from 'moment'

class HeatMapContainer extends React.Component {
   static propTypes = {
      data: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired
   }

   constructor(props) {
      super(props);
      const { dispatch } = this.props
      this.datePickers = [
         {
            label: 'Start',
            onChange: (moment, idx) => {
               this.datePickers[idx].value = moment._d
               dispatch(fetchData(moment._d, this.datePickers[1].value))
            },
            value: moment('2018-05-20').subtract(1, 'years')
         },
         {
            label: 'Stop',
            onChange: (moment, idx) => {
               this.datePickers[idx].value = moment._d
               dispatch(fetchData(moment._d, this.datePickers[0].value, 1))
               dispatch(fetchData(this.datePickers[0].value, moment._d))
            },
            value: moment('2018-05-20')
         }
      ]
   }

   componentDidMount() {
      const { dispatch } = this.props
      dispatch(fetchData(moment().subtract(1, 'years'), moment(), 1))
   }

   render() {
      return (
         <HeatMap {...this.props} datePickers={this.datePickers} />
      )
   }
}


function mapStateToProps(state) {
   const {
      data,
      isFetching
   } = state.heatMap || {
      isFetching: true,
      data: []
   }

   return {
      data, isFetching
   }
}

export default connect(mapStateToProps)(HeatMapContainer)