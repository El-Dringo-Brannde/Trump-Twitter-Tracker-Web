import React from 'react'
import PropTypes from 'prop-types'

import { fetchData as sunBurstFetch } from './../redux/sunburst/actions';
import { fetchData as wordCloudFetch } from './../redux/wordcloud/actions';
import { fetchData as heatMapFetch } from './../redux/heatmap/actions';

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