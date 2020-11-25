import React, { Component } from 'react';
import SkewedContainer from 'sc-react';
import propTypes from 'prop-types';

import { CircularProgress, Grid } from '@material-ui/core';
import DatePickers from '../nav/datepicker';

import sunBurstConfig from '../../config/graphs/sunburst';

export default class SunBurst extends Component {
	async componentDidUpdate() {
		const { data, isFetching } = this.props;
		const { length } = this.props;
		if (length !== 0 && !isFetching) sunBurstConfig(data);
	}

	render() {
		const { datePickers, isFetching } = this.props;
		return (
			<SkewedContainer
				bgColor="#9C27B0"
				top="right"
				noMargin
				style={{ padding: '75px 0px', width: '100%' }}
			>
				<Grid container alignItems="center" justify="center">
					<DatePickers datePickers={datePickers} />
				</Grid>
				{isFetching ? (
					<Grid container alignItems="center" justify="center">
						<CircularProgress size={150} />
					</Grid>
				) : (
					<div id="sunburst" style={{ marginBottom: 100 }} />
				)}
			</SkewedContainer>
		);
	}
}

SunBurst.propTypes = {
	data: propTypes.arrayOf(
		propTypes.objectOf({
			name: propTypes.string,
			id: propTypes.string,
			parent: propTypes.string
		})
	).isRequired,
	datePickers: propTypes.element.isRequired,
	isFetching: propTypes.bool.isRequired
};
