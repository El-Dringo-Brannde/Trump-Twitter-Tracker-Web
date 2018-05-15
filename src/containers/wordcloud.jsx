import React from 'react'
import SkewedContainer from "sc-react";
import * as axios from 'axios';

import URL from './../config/server'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from "./../actions/graphs";

import { FETCH_DATA_START } from './../actions/index'

// import WordCloud from "./../components/wordcloud";

class WordCloudContainer extends React.Component {
   static propTypes = {
      data: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired
   }

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      console.log(this.props)
      const { dispatch } = this.props
      dispatch(fetchData({ type: FETCH_DATA_START }))
   }

   render() {
      const { data, isFetching } = this.props
      console.log(this.props)
      return (
         // <WordCloud data={data} />
         <div></div>
      )
   }
}


function mapStateToProps(state) {
   console.log(state)
   const {
      isFetching,
      data
   } = state.getData || {
      isFetching: true,
      data: []
   }

   return {
      data,
      isFetching
   }
}

export default connect(mapStateToProps)(WordCloudContainer)