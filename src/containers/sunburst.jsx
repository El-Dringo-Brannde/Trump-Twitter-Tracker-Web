import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as momentLib from 'moment';
import { fetchData } from '../redux/sunburst/actions';

import SunBurst from '../components/graphs/sunburst';

class SunBurstContainer extends Component {
	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		this.datePickers = [
			{
				label: 'Start',
				onChange: (moment, idx) => {
					this.datePickers[idx].value = moment._d;
					dispatch(
						fetchData(moment._d, this.datePickers[1].value, 1)
					);
				},
				value: momentLib().subtract(1, 'years')
			},
			{
				label: 'Stop',
				onChange: (moment, idx) => {
					this.datePickers[idx].value = moment._d;
					dispatch(
						fetchData(this.datePickers[0].value, moment._d, 1)
					);
				},
				value: momentLib('2018-05-20')
			}
		];
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchData(momentLib().subtract(1, 'years'), momentLib(), 1));
	}

	render() {
		return <SunBurst {...this.props} datePickers={this.datePickers} />;
	}
}

function mapStateToProps(state) {
	const { data, isFetching } = state.sunBurst || {
		isFetching: true,
		data: []
	};

	return {
		data,
		isFetching
	};
}

SunBurstContainer.propTypes = {
	data: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(SunBurstContainer);
