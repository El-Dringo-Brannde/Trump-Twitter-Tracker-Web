import React from 'react'
import SkewedContainer from "sc-react";
import * as axios from 'axios';

import URL from './../config/server'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from './../redux/wordcloud/actions';


import WordCloud from "./../components/graphs/wordcloud";


class WordCloudContainer extends React.Component {
   static propTypes = {
      data: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired
   }

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      const { dispatch } = this.props
      dispatch(fetchData('wordCloud', 'all'))
   }

   render() {
      const { data, isFetching } = this.props
      return (
         <WordCloud {...this.props} />
      )
   }
}


function mapStateToProps(state) {
   const {
      data,
      isFetching
   } = state.wordCloud || {
      isFetching: true,
      data: []
   }

   return {
      data, isFetching
   }
}

export default connect(mapStateToProps)(WordCloudContainer)