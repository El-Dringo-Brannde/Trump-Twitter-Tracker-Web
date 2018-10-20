import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as moment from 'moment';
import { fetchData } from '../redux/heatmap/actions';

import HeatMap from '../components/graphs/heatmap';

class HeatMapContainer extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.datePickers = [
      {
        label: 'Start',
        onChange: (momentDate, idx) => {
          this.datePickers[idx].value = momentDate._d;
          dispatch(fetchData(momentDate._d, this.datePickers[1].value));
        },
        value: moment('2018-05-20').subtract(1, 'years'),
      },
      {
        label: 'Stop',
        onChange: (momentDate, idx) => {
          this.datePickers[idx].value = momentDate._d;
          dispatch(
            fetchData(momentDate._d, this.datePickers[0].value, 1),
          );
          dispatch(fetchData(this.datePickers[0].value, momentDate._d));
        },
        value: moment('2018-05-20'),
      },
    ];
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchData(moment().subtract(1, 'years'), moment(), 1));
  }

  render() {
    return <HeatMap {...this.props} datePickers={this.datePickers} />;
  }
}

function mapStateToProps(state) {
  const { data, isFetching } = state.heatMap || {
    isFetching: true,
    data: [],
  };

  return {
    data,
    isFetching,
  };
}

HeatMapContainer.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HeatMapContainer);
