import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
   root: {
      flexGrow: 1,
   },
};
let tabVal = 0

class CenteredTabs extends React.Component {
   state = {
      value: 0,
   };


   render() {
      const { classes } = this.props;

      return (
         <Paper className={classes.root}>
            <Tabs
               value={this.props.tabVal}
               indicatorColor="primary"
               textColor="primary"
               centered
            >
               {this.props.tabs.map((tab, idx) => {
                  return (
                     <Tab
                        label={tab.label}
                        onClick={tab.onClick}
                     />
                  )
               })}
            </Tabs>
         </Paper>
      );
   }
}

CenteredTabs.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
