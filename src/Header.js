import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Container } from '@material-ui/core';

export default class Header extends Component{
    
render(){
    return(
  <Container style ={{maxHeight:64, maxWidth:1519.2, backgroundColor:lightGreen[700], position:"absolute"}}>
   
    <Typography  style={{float:"right", fontSize: "1.05vw",color: "white", marginTop:20}}>
      01745687998
    </Typography>
    <PhoneIcon color="primary" style={{float:"right", marginLeft:20, marginRight:5, marginTop:18,  fontSize: "2vw"}}></PhoneIcon>
    
    <Typography style={{float:"right", color: "white", fontSize: "1.05vw", marginTop:20}} >
      info_praxismiller@web.de
    </Typography>
    <MailOutlineIcon color="primary" style={{float:"right", marginRight:8, marginTop:18, fontSize: "2vw"}}>
    </MailOutlineIcon>
</Container>
)
    }
};