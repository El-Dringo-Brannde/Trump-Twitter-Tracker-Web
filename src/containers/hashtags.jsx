import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from './../redux/hashtags/actions';

import Columns from "./../components/graphs/column";
import * as moment from 'moment'

let hashtagConfig = {
   containerID: 'Hashtags',
   yAxis: 'Hashtag Count',
   toolTip: '<b> Times Tagged: {point.y}</b>',
   title: 'Trump\'s Most Popular Hashtags'
}


class HashtagsContainer extends React.Component {
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
               dispatch(fetchData(moment._d, this.datePickers[1].value, 1))
            },
            value: moment().subtract(1, 'years')
         },
         {
            label: 'Stop',
            onChange: (moment, idx) => {
               this.datePickers[idx].value = moment._d
               dispatch(fetchData(moment._d, this.datePickers[0].value, 1))
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
         <div>
            <Columns
               {...this.props}
               datePickers={this.datePickers}
               columnConfig={hashtagConfig}
            />
         </div>
      )
   }
}


function mapStateToProps(state) {
   const {
      data,
      isFetching
   } = state.hashtags || {
      isFetching: true,
      data: []
   }

   return {
      data, isFetching
   }
}

export default connect(mapStateToProps)(HashtagsContainer)