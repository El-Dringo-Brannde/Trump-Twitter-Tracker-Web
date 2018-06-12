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
   BrowserRouter as Router,
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
                  <Route path={`${process.env.PUBLIC_URL}/wordcloud`} component={WordCloudContainer} />
                  <Route path={`${process.env.PUBLIC_URL}/sunburst`} component={SunBurstContainer} />
                  <Route path={`${process.env.PUBLIC_URL}/heatmap`} component={HeatMapContainer} />
                  <Route path={`${process.env.PUBLIC_URL}/all`} component={AllContainer} />
                  <Route path={`${process.env.PUBLIC_URL}/mentions`} component={MentionsContainer} />
                  <Route path={`${process.env.PUBLIC_URL}/hashtags`} component={HashtagsContainer} />
                  <Route component={Lost} />
               </Switch>
            </div>
         </Router>
      );
   }
}

export default App;
