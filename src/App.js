import React, { Component } from 'react';

import './App.css';

import HeatMapContainer from "./containers/heatmap";
import SunBurstContainer from './containers/sunburst'
import WordCloudContainer from './containers/wordcloud'
import AllContainer from './containers/all'
import Lost from './components/nav/404'
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
                  <Route path='/Trump-Twitter-Tracker-Web/wordcloud' component={WordCloudContainer} />
                  <Route path='/Trump-Twitter-Tracker-Web/sunburst' component={SunBurstContainer} />
                  <Route path='/Trump-Twitter-Tracker-Web/heatmap' component={HeatMapContainer} />
                  <Route path='/Trump-Twitter-Tracker-Web/all' component={AllContainer} />
                  <Route component={Lost} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
