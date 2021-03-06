import React from 'react';
import propTypes from 'prop-types';
import {
  DatePicker
} from '@material-ui/pickers';

import { Paper, Grid } from '@material-ui/core';

const DatePickers = props => {
	const { datePickers } = props;
	return (
		<Grid container direction="row" justify="center" alignItems="center">
			{datePickers.map((el, idx) => (
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
};

DatePickers.propTypes = {
	datePickers: propTypes.arrayOf(
		propTypes.shape({
			label: propTypes.string,
			onChange: propTypes.onChange,
			value: propTypes.instanceOf(Date)
		})
	).isRequired
};

export default DatePickers;
