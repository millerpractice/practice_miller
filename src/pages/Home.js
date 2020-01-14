import React, { Component } from 'react';
import Header from "../Header.js"
import Logo from "../Logo"
import Welcome from "../Welcome"
import About from "../Aboutus"
import Team from "../Team"
import Contact from '../Contact.js';
import Footer from "../Footer"
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import requestlg from "./desktop200.png"
import requestmd from "./desktop150.png"
import requestsm from "./desktop100.png"
import requestxs from "./desktop50.png"
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import Typography from '@material-ui/core/Typography';



export default class Home extends Component {

    state = {
        open: true,
      };
    
         
      handleClose = () => {
        this.setState({open: false});
      };
    
    render() {
        return (
<Paper style ={{overflowX:"hidden", overflowY:"hidden"}}>

<Dialog style={{minHeight: "fit-content", maxHeight: "fit-content", maxWidth: "100%", borderRadius:16, borderColor:"white"}} open={this.state.open} onClose={this.handleClose}>
      <DialogTitle style={{backgroundColor: lightGreen[200]}} id="alert-dialog-title">
      <Typography style={{color:"white", fontSize:"1.5vw", fontWeight:500 }}>Dear visitors,</Typography>
      </DialogTitle>
  <DialogContent style={{backgroundColor: lightGreen[200], overflowX:"hidden"}}>
    <DialogContentText id="alert-dialog-description">
    <Typography style={{color:"white", fontSize:"1.3vw", fontWeight:500  }}>
      we are sorry to inform you that the mobile version of our website is currently under construction. 
      If you are using your mobile device, please make sure you activate the desktop view in your browser like shown below.
      </Typography>
      <Typography style={{color:"white", fontSize:"1.3vw", fontWeight:500  }}>  We appologise for the inconvenience.</Typography>
    </DialogContentText>
    <ResponsiveImgMaterialUi xs={requestsm} sm={requestsm} md={requestmd} lg={requestlg} 
style={{borderRadius:16,float: "right"}}></ResponsiveImgMaterialUi>

  </DialogContent>
  <DialogActions style={{backgroundColor: lightGreen[200]}}>
        <Button onClick={this.handleClose} color="primary" autoFocus>
      Ok
    </Button>
  </DialogActions>
</Dialog>
   
<Header></Header>
<Logo></Logo>
<Welcome></Welcome>
<About></About>
<Team></Team>
<Contact></Contact>
<Footer/>
</Paper>
        )
    }
}