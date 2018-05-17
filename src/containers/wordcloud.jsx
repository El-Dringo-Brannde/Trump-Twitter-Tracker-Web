import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { fetchData } from './../redux/wordcloud/actions';

import WordCloud from "./../components/graphs/wordcloud";

class WordCloudContainer extends React.Component {
   static propTypes = {
      data: PropTypes.array.isRequired,
      isFetching: PropTypes.bool.isRequired
   }

   componentDidMount() {
      const { dispatch } = this.props
      dispatch(fetchData('wordCloud', 'all'))
   }

   render() {
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