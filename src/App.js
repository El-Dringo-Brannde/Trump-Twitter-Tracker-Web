import React, { Component } from 'react';
import './App.css';
import HeatMapContainer from "./containers/heatmap";
import SunBurstContainer from './containers/sunburst'
import WordCloudContainer from './containers/wordcloud'

import {
   BrowserRouter as Router,
   Route,

} from 'react-router-dom'

class App extends Component {
   render() {
      return (
         <Router>
            <div >
               <Route path='/word-cloud' component={WordCloudContainer} />
               <Route path='/sun-burst' component={SunBurstContainer} />
               <Route path='/heat-map' component={HeatMapContainer} />
            </div>
         </Router>
      );
   }
}

export default App;
