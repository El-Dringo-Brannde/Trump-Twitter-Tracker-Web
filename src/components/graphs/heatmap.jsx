import React from 'react';
import SkewedContainer from 'sc-react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DatePickers from '../nav/datepicker';

import heatMapConfig from '../../config/graphs/heatmap';

export default class HeatMap extends React.Component {
  componentDidUpdate() {
    const { data, isFetching } = this.props;
    const { length } = data;
    if (length !== 0 && !isFetching) heatMapConfig(data);
  }

  render() {
    const { datePickers, isFetching } = this.props;
    return (
      <SkewedContainer
        bgColor="#F44336"
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
          <div id="heatmap" />
        )}
      </SkewedContainer>
    );
  }
}
