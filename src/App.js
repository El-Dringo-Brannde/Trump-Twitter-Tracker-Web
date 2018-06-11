import React, { Component } from 'react';

import './App.css';

import HeatMapContainer from "./containers/heatmap";
import SunBurstContainer from './containers/sunburst'
import WordCloudContainer from './containers/wordcloud'
import AllContainer from './containers/all'
import MentionsContainer from "./containers/mentions";
import HashtagsContainer from './containers/hashtags'

import Lost from './components/nav/404'
import NavBar from './components/nav/bar'

import {
   HashRouter as Router,
   Route,
   Switch,
   has
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
                  <Route path='/Trump-Twitter-Tracker-Web/mentions' component={MentionsContainer} />
                  <Route path='/Trump-Twitter-Tracker-Web/hashtags' component={HashtagsContainer} />
                  <Route component={Lost} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
