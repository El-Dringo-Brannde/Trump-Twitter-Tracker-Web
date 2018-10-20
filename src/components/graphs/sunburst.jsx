import React from 'react';
import SkewedContainer from 'sc-react';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import DatePickers from '../nav/datepicker';

import sunBurstConfig from '../../config/graphs/sunburst';

export default class SunBurst extends React.Component {
  async componentDidUpdate(prevProps, prevState) {
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
