import React from 'react';

import SunBurstContainer from './sunburst';
import WordCloudContainer from './wordcloud';
import HeatMapContainer from './heatmap';
import MentionsContainer from './mentions';
import HashtagsContainer from './hashtags';

const AllContainer = () => (
  <div>
    <WordCloudContainer />
    <SunBurstContainer />
    <HeatMapContainer />
    <MentionsContainer />
    <HashtagsContainer />
  </div>
);

export default AllContainer;
