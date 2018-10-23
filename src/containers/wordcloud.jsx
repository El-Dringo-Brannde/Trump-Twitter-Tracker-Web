import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../redux/wordcloud/actions';

import WordCloud from '../components/graphs/wordcloud';

class WordCloudContainer extends React.Component {
	constructor(props) {
		super(props);

		const { dispatch } = this.props;
		this.tabs = [
			{
				label: '1 Word',
				onClick: () => {
					dispatch(fetchData(1));
					this.tabVal = 0;
				}
			},
			{
				label: '2 Word',
				onClick: () => {
					dispatch(fetchData(2));
					this.tabVal = 1;
				}
			},
			{
				label: '3 Word',
				onClick: () => {
					dispatch(fetchData(3));
					this.tabVal = 2;
				}
			}
		];
		this.tabVal = 0;
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchData(1));
	}

	render() {
		return (
			<WordCloud {...this.props} tabs={this.tabs} tabVal={this.tabVal} />
		);
	}
}

function mapStateToProps(state) {
	const { data, isFetching } = state.wordCloud || {
		isFetching: true,
		data: []
	};

	return {
		data,
		isFetching
	};
}

WordCloudContainer.propTypes = {
	data: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired
};
export default connect(mapStateToProps)(WordCloudContainer);
