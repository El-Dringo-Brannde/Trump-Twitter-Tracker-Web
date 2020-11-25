import React, { Component } from 'react';
import SkewedContainer from 'sc-react';
import propTypes from 'prop-types';

import { CircularProgress, Grid } from '@material-ui/core';
import DatePickers from '../nav/datepicker';

import columnGraphConfig from '../../config/graphs/columns';

export default class Columns extends Component {
	componentDidUpdate() {
		const { data, isFetching, columnConfig } = this.props;
		const { length } = data;
		if (length !== 0 && !isFetching) {
			columnConfig.data = data;
			columnGraphConfig(columnConfig);
		}
	}

	render() {
		const { columnConfig, datePickers, isFetching } = this.props;
		return (
			<SkewedContainer
				bgColor="#B71C1C"
				top="left"
				noMargin
				style={{ padding: '75px 0px', width: '100%' }}
			>
				<DatePickers datePickers={datePickers} />
				{isFetching ? (
					<Grid container alignItems="center" justify="center">
						<CircularProgress size={150} />
					</Grid>
				) : (
					<div id={columnConfig.containerID} />
				)}
			</SkewedContainer>
		);
	}
}

Columns.propTypes = {
	columnConfig: propTypes.object.isRequired,
	datePickers: propTypes.array.isRequired,
	isFetching: propTypes.bool.isRequired,
	data: propTypes.object.isRequired
};
