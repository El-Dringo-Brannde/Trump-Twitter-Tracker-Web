import { combineReducers } from "redux";

import wordCloud from "./wordcloud/reducer";
import sunBurst from './sunburst/reducer'
import heatMap from './heatmap/reducer'
import mentions from "./mentions/reducer";

const rootReducer = combineReducers({ 
   wordCloud, 
   sunBurst, 
   heatMap, 
   mentions
 })

export default rootReducer