import React from 'react';

import './App.css';

import {
	SunBurstContainer,
	WordCloudContainer,
	HeatMapContainer,
	MentionsContainer,
	HashtagsContainer,
	AllContainer
} from './containers';

import Lost from './components/nav/404';
import NavBar from './components/nav/bar';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
	<Router>
		<>
			<NavBar />
			<Switch>
				<Route path="/" component={AllContainer} />
				<Route path="/wordcloud" component={WordCloudContainer} />
				<Route path="/sunburst" component={SunBurstContainer} />
				<Route path="/heatmap" component={HeatMapContainer} />
				<Route path="/mentions" component={MentionsContainer} />
				<Route path="/hashtags" component={HashtagsContainer} />
				<Route component={Lost} />
			</Switch>
		</>
	</Router>
);

export default App;
