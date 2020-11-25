import React from 'react';

import {
	SunBurstContainer,
	WordCloudContainer,
	HeatMapContainer,
	MentionsContainer,
	HashtagsContainer
} from './';

const AllContainer = () => (
	<>
		<WordCloudContainer />
		<SunBurstContainer />
		<HeatMapContainer />
		<MentionsContainer />
		<HashtagsContainer />
	</>
);

export default AllContainer;
