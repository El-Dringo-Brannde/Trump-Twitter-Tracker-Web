import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from './../redux/sunburst/actions';

import SunBurst from "./../components/graphs/sunburst";


class SunBurstContainer extends React.Component {
   static propTypes = {
      data: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired
   }

   componentDidMount() {
      const { dispatch } = this.props
      dispatch(fetchData('sunburst'))
   }

   render() {
      return (
         <div>
            <SunBurst {...this.props} />
         </div>
      )
   }
}


function mapStateToProps(state) {
   const {
      data,
      isFetching
   } = state.sunBurst || {
      isFetching: true,
      data: []
   }

   return {
      data, isFetching
   }
}

export default connect(mapStateToProps)(SunBurstContainer)