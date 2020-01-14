import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import request from "./request desktop.png"


export default class AlertDialog extends Component {
    
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
  render(){
  return (
  <Dialog style={{backgroundColor: lightGreen[100]}} open={true}>
      <DialogTitle id="alert-dialog-title">{"Dear visitors,"}</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      we are sorry to inform you that the mobile version of our website is currently under construction. 
      If you are using your mobile device, please make sure you activate the desktop view in your browser like shown below.
      We appologise for the inconvenience.
    </DialogContentText>
    <img alt="request" src={request}></img>
  </DialogContent>
  <DialogActions>
        <Button onClick={this.handleClose} color="primary" autoFocus>
      Ok
    </Button>
  </DialogActions>
</Dialog>
  )
  }
}
  