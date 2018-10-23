import React from 'react';
import propTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
	root: {
		flexGrow: 1
	}
};

const CenteredTabs = props => {
	const { classes, tabVal, tabs } = props;

	return (
		<Paper className={classes.root}>
			<Tabs
				value={tabVal}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				{tabs.map((tab, idx) => (
					<Tab key={idx} label={tab.label} onClick={tab.onClick} />
				))}
			</Tabs>
		</Paper>
	);
};

CenteredTabs.propTypes = {
	classes: propTypes.object.isRequired,
	tabVal: propTypes.number.isRequired,
	tabs: propTypes.arrayOf(
		propTypes.shape({
			label: propTypes.string,
			onClick: propTypes.func
		})
	).isRequired
};

export default withStyles(styles)(CenteredTabs);
