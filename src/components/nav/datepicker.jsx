import React from 'react';
import { DatePicker } from 'material-ui-pickers';

import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const DatePickers = props => (
  <Grid container direction="row" justify="center" alignItems="center">
    {props.datePickers.map((el, idx) => (
      <Paper style={{ margin: 25, padding: 25 }} key={idx}>
        <DatePicker
          style={{ padding: 5 }}
          key={idx}
          label={el.label}
          value={el.value}
          format="YYYY/MM/DD"
          onChange={momentDate => el.onChange(momentDate, idx)}
          minDate="2017-02-10"
          maxDate="2018-05-20"
          disableFuture
          showTodayButton
          clearable
        />
      </Paper>
    ))}
  </Grid>
);

export default DatePickers;
