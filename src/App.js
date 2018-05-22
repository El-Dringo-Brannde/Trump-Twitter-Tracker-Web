import React, { Component } from 'react';

import './App.css';

import HeatMapContainer from "./containers/heatmap";
import SunBurstContainer from './containers/sunburst'
import WordCloudContainer from './containers/wordcloud'
import AllContainer from './containers/all'
import NavBar from './components/nav/bar'


import {
   BrowserRouter as Router,
   Route,
} from 'react-router-dom'

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <NavBar />
               <Route path='/wordcloud' component={WordCloudContainer} />
               <Route path='/sunburst' component={SunBurstContainer} />
               <Route path='/heatmap' component={HeatMapContainer} />
               <Route path='/all' component={AllContainer} />
            </div>
         </Router>
      );
   }
}

export default App;
