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
   constructor(props) {
      super(props)
   }


   componentDidMount() {
      const { dispatch } = this.props
      console.log(123)
      dispatch(fetchData('sunburst'))
   }

   componentWillUpdate(prevProps, prevState) {
      console.log('foo325');
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