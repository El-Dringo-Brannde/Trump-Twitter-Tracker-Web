import React from 'react'
import PropTypes from 'prop-types'

import SunBurstContainer from './sunburst'
import WordCloudContainer from './wordcloud'
import HeatMapContainer from "./heatmap";

class AllContainer extends React.Component {

   render() {
      return (
         <div>
            <WordCloudContainer />
            <SunBurstContainer />
            <HeatMapContainer />
         </div>
      )
   }
}


export default AllContainer