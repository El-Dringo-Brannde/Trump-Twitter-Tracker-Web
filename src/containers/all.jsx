import React from 'react'
import PropTypes from 'prop-types'

import SunBurstContainer from './sunburst'
import WordCloudContainer from './wordcloud'
import HeatMapContainer from "./heatmap";
import MentionsContainer from "./mentions";
import HashtagsContainer from './hashtags'

class AllContainer extends React.Component {

   render() {
      return (
         <div>
            <WordCloudContainer />
            <SunBurstContainer />
            <HeatMapContainer />
            <MentionsContainer />
            <HashtagsContainer />
         </div>
      )
   }
}


export default AllContainer