import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as momentLib from 'moment';
import { fetchData } from '../redux/hashtags/actions';

import Columns from '../components/graphs/column';

const hashtagConfig = {
	containerID: 'Hashtags',
	yAxis: 'Hashtag Count',
	toolTip: '<b> Times Tagged: {point.y}</b>',
	title: "Trump's Most Popular Hashtags"
};

class HashtagsContainer extends Component {
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
		return (
			<div>
				<Columns
					{...this.props}
					datePickers={this.datePickers}
					columnConfig={hashtagConfig}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { data, isFetching } = state.hashtags || {
		isFetching: true,
		data: []
	};

	return {
		data,
		isFetching
	};
}

export default connect(mapStateToProps)(HashtagsContainer);
