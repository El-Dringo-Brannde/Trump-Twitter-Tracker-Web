import React, { Component } from 'react';
import './App.css';
// import HeatMap from "./components/heatmap";
// import SunBurst from './components/sunburst'
import WordCloudContainer from './containers/wordcloud'

class App extends Component {
   render() {
      return (
         <div >
            <WordCloudContainer />
            {/* <SunBurst></SunBurst>
            <HeatMap></HeatMap> */}
         </div>
      );
   }
}

export default App;
