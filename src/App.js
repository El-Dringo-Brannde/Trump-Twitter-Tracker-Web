import React, { Component } from 'react';
import './App.css';
import HeatMap from "./components/heatmap";
import SunBurst from './components/sunburst'
import WordCloud from './components/wordcloud'

class App extends Component {
   render() {
      return (
         <div >
            <HeatMap></HeatMap>
            <SunBurst></SunBurst>
            <WordCloud></WordCloud>
         </div>
      );
   }
}

export default App;
