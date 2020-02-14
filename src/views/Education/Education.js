import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { EducationsTable, EducationsToolbar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Education = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <EducationsToolbar />
      <div className={classes.content}>
        <div className={classes.content}>
          <EducationsTable />
        </div>
      </div>
    </div>
  );
};

export default Education;
