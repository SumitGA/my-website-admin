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

const NewEducation = props => {
  const { className, ...rest } = props;
  const [open, setOpen] = React.useState(false);
  const [instituteName, setInstituteName] = React.useState({});
  const [degreeName, setDegreeName] = React.useState({});
  const [description, setDescription] = React.useState({});
  const [address, setAddress] = React.useState({});
  // const [startDate, setstartDate] = React.useState({});
  // const [endDate, setendDate] = React.useState({});

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSubmit = (e) => {
    console.log(instituteName);
    console.log(degreeName);
    console.log(description);
    console.log(address);
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
          Add Education
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
            <form className={classes.formStyle} autoComplete="off" onSubmit={ handleClose }>
              <div className={classes.modalContents}>
                <TextField
                  id="outlined-name"
                  label="Institute Name"
                  onChange={ e => setInstituteName(e.target.value) }
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Degree Name"
                  onChange={ e => setDegreeName(e.target.value) }
                  variant="outlined"
                />
              </div>
              <div className={classes.modalContents}>
                <TextField
                  id="outlined-name"
                  label="Description"
                  onChange={ e => setDescription(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  id="outlined-name"
                  label="Address"
                  onChange={ e => setAddress(e.target.value)}
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
                onClick={handleSubmit}
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
          placeholder="Search Educations"
        />
      </div>
    </div>
  );
};

NewEducation.propTypes = {
  className: PropTypes.string
};

export default NewEducation;
