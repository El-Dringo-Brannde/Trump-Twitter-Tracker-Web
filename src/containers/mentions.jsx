import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from './../redux/mentions/actions';

import Columns from "./../components/graphs/column";
import * as moment from 'moment'

let mentionConfig = {
   containerID: 'Mentions',
   yAxis: 'Mentioned Count',
   toolTip: '<b> Times mentioned: {point.y}</b>',
   title: 'Trump\'s Most Popular Tweet Mentions'
}


class MentionsContainer extends React.Component {
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
               columnConfig={mentionConfig}
            />
         </div>
      )
   }
}


function mapStateToProps(state) {
   const {
      data,
      isFetching
   } = state.mentions || {
      isFetching: true,
      data: []
   }

   return {
      data, isFetching
   }
}

export default connect(mapStateToProps)(MentionsContainer)