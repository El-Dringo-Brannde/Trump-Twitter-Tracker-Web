import React, { Component } from 'react';
import SkewedContainer from 'sc-react';
import propTypes from 'prop-types';

import { CircularProgress, Grid } from '@material-ui/core';

import wordCloudConfig from '../../config/graphs/wordcloud';
import CenteredTabs from '../nav/tabs';

export default class WordCloud extends Component {
	componentDidUpdate() {
		const { data, isFetching } = this.props;
		const { length } = data;
		if (length !== 0 && !isFetching) wordCloudConfig(data);
	}

	render() {
		const { tabs, tabVal, isFetching } = this.props;
		return (
			<SkewedContainer
				bgColor="#03A9F4"
				noMargin
				style={{ padding: '50px 0px', width: '100%' }}
			>
				<CenteredTabs tabs={tabs} tabVal={tabVal} />
				{isFetching ? (
					<Grid container alignItems="center" justify="center">
						<CircularProgress size={150} />
					</Grid>
				) : (
					<div id="wordcloud" style={{ marginBottom: 100 }} />
				)}
			</SkewedContainer>
		);
	}
}

WordCloud.propTypes = {
	data: propTypes.arrayOf(propTypes.object).isRequired,
	isFetching: propTypes.bool.isRequired,
	tabs: propTypes.arrayOf(propTypes.object).isRequired,
	tabVal: propTypes.number.isRequired
};
