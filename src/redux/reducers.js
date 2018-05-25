import { combineReducers } from "redux";

import wordCloud from "./wordcloud/reducer";
import sunBurst from './sunburst/reducer'
import heatMap from './heatmap/reducer'

const rootReducer = combineReducers({ 
   wordCloud, 
   sunBurst, 
   heatMap
 })

export default rootReducer