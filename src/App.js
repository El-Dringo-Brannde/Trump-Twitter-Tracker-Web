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
   Switch
} from 'react-router-dom'

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <NavBar />
               <Switch>
                  <Route path='/trump-twitter-tracker/wordcloud' component={WordCloudContainer} />
                  <Route path='/trump-twitter-tracker/sunburst' component={SunBurstContainer} />
                  <Route path='/trump-twitter-tracker/heatmap' component={HeatMapContainer} />
                  <Route path='/trump-twitter-tracker/all' component={AllContainer} />
                  <Route component={AllContainer} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
