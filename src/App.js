import React, { Component } from 'react';
import './App.css';
import HeatMapContainer from "./containers/heatmap";
import SunBurstContainer from './containers/sunburst'
import WordCloudContainer from './containers/wordcloud'

class App extends Component {
   render() {
      return (
         <div >
            <WordCloudContainer />
            <SunBurstContainer />
            <HeatMapContainer />
         </div>
      );
   }
}

export default App;
