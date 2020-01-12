import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import logosm from './logo sm.png';
import logomd from './logo md.png';
import logolg from './logo lg.png';
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default class Logo extends Component {

    

    render() {
        return (

            <Container style={{marginTop: "3.2%",backgroundColor: lightGreen[300], maxHeight:160, maxWidth:1519.2, position: "absolute",
                paddingLeft: "initial", paddingRight: "initial"}}>

                <ResponsiveImgMaterialUi
          xs={logosm}
          sm={logosm}
          md={logomd}
          lg={logolg}
          style={{float: "left",  marginTop: 12, marginLeft:25 }}
        />
       
        
        <Grid container spacing={0} direction="row" justify="flex-end"
  alignItems="flex-end"style={{width:370, right:0, marginRight:20, bottom: 5,
  maxHeight: "fit-content", position: "absolute"
}}> 
             <Grid item xs  style={{flexBasis:"initial", maxWidth:"fit-content", marginRight:10}}>
        <a style={{color:'white', fontSize: "1.25vw", fontWeight: 500, textDecorationLine: 'blink'}} href='#welcome'> Welcome </a>
        </Grid>
        <Grid item xs style={{flexBasis:"initial", maxWidth:"fit-content", marginRight:10}}>
        <a style={{color:'white', fontSize: "1.25vw", fontWeight: 500, textDecorationLine: 'blink'}} href='#aboutus'> About us </a>
        </Grid>
        <Grid item xs  style={{flexBasis:"initial", maxWidth:"fit-content", marginRight:10}}>
        <a style={{color:'white', fontSize: "1.25vw", fontWeight: 500, textDecorationLine: 'blink' }} href='#team'>Team </a>  
       </Grid>
        <Grid item xs  style={{flexBasis:"initial", maxWidth:"fit-content", marginRight:10}}>
        <a style={{color:'white', fontSize: "1.25vw", fontWeight: 500, textDecorationLine: 'blink'}} href='#contact'> Contact</a>         
             </Grid>  
               </Grid>
                
            </Container>
        )
    }
}