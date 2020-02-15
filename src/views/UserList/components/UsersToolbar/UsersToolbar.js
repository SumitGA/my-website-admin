import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Modal, TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  modalStyle: {
    height: '100px',
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: theme.spacing(1)
  },
  modalTitle: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  modalContents: {
    display: 'flex',
    flexDirection: 'column',
  },
  modalButtons: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  paper: {
    position: 'absolute',
    width: 500,
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: '30%',
    left: '30%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid blue',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formStyle: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'space-between',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    }
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button
          color="primary"
          onClick={handleOpen}
          variant="contained"
        >
          Add user
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div className={classes.paper}>
            <h3 id="simple-modal-title" className={classes.modalTitle}>Add New User</h3>
            <Divider variant="middle" />
            <form className={classes.formStyle} autoComplete="off">
              <div className={classes.modalContents}>
                <TextField
                  id="outlined-name"
                  label="Name"
                  value="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Email"
                  value="Email"
                  variant="outlined"
                />
              </div>
              <div className={classes.modalContents}>
                <TextField
                  id="outlined-name"
                  label="password"
                  value="password"
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Confirm Password"
                  value="confirm-password"
                  variant="outlined"
                />
              </div>
            </form>
            <div className={classes.modalButtons}>
              <Button
                onClick={handleClose}
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={handleClose}
                variant="contained"
              >
                Create
              </Button>
            </div>
          </div>
        </Modal>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
