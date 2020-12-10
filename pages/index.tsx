/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
// --- Post bootstrap -----
import React from 'react';
import '../src/bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing.unit * 20,
    textAlign: 'center'
  }
}));

function Index() {
  const classes = useStyles({});
  const [open, setState] = React.useState(false);

  const handleClose = () => {
    setState(false);
  };
  const handleClick = () => {
    setState(true);
  };

  return (
    <div className={classes.root}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Model launched!</DialogTitle>
        <DialogContent>
          <DialogContentText>Here ya go dog!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Typography variant="h4" gutterBottom>
        StackBlitz Template
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        NextJS, Material-UI & TypeScript
      </Typography>
      <Typography gutterBottom>
        <Link href="/about">
          <a>Go to the about page</a>
        </Link>
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Show me the Modal!
      </Button>
    </div>
  );
}

export default Index;
