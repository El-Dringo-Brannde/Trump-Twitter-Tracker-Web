import React from 'react'
import SkewedContainer from "sc-react";
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from './../redux/heatmap/actions';

import HeatMap from "./../components/graphs/heatmap";

class HeatMapContainer extends React.Component {
   static propTypes = {
      data: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired
   }

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      const { dispatch } = this.props
      dispatch(fetchData('sunBurst', 'times'))
   }

   render() {
      return (
         <HeatMap {...this.props} />
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