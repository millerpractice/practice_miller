import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import teal from '@material-ui/core/colors/teal';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends Component {

    render() {
        return (
            <ScrollableAnchor id={'contact'}>
                <Grid container  justify="space-around" style={{ paddingTop: 45, backgroundColor: lightGreen[300], flexWrap: "inherit",
            maxHeight: 800, height: "45vw",minHeight: 450, maxWidth: 1519.2, marginRight:0, marginLeft:0, position:"relative" }}>
                    <Grid item xs={6} style={{ backgroundColor: lightGreen[200], paddingLeft: 0, paddingRight: 0, 
                      marginTop: 10,borderRadius: 16, maxHeight: "max-content",
                      minHeight: "min-content",marginBottom:50, maxWidth: "40%", minWidth: "40%"}}>
                          <Grid item xs >
                        <Typography  variant="h5" style={{ color: lightGreen[700], marginTop:40, fontWeight: 700,fontSize:"2vw" }}>Contact</Typography>
                       </Grid>
                       <Grid item xs style={{maxWidth: "fit-content", marginTop: 50}}>
                        <MailOutlineIcon color="primary" style={{  marginLeft: 40, fontSize: "2.2vw", fontWeight:700 }}>
                        </MailOutlineIcon>
                        <Typography  variant="subtitle1" style={{ color: lightGreen[700],  fontSize: "1.2vw",float: "right",
    marginLeft: 20, top: 5, position: "relative", fontWeight: 500 }}>
                            info_praxismiller@web.de</Typography>
                            </Grid>
                            <Grid item xs style={{minHeight: 60, maxWidth: "fit-content",paddingTop: 40 }}>
                        <PhoneIcon color="primary" style={{ float: "left", marginLeft: 40,  fontSize: "2.2vw", bottom: 0 }}></PhoneIcon>
                        <Typography variant="subtitle1" style={{ color: lightGreen[700], fontSize: "1.2vw", fontWeight: 500,
                    float:"right", marginLeft: 20, top: 5, position: "relative",  bottom: 0 }}>
                            01745687998 </Typography>
                            </Grid>
                            <Grid item xs style={{maxWidth: 250, paddingTop: 60,position: "absolute" }}>
                    <LocationOnIcon color="primary" style={{ float: "left", marginLeft: 40,  fontSize: "2.2vw"}}></LocationOnIcon>
                    <Typography variant="subtitle1" style={{ color: lightGreen[700], fontSize: "1.2vw", 
                    position: "relative", right:0,fontWeight: 500 }}>
                            Liebigstraße 62, 64293 Darmstadt, Germany </Typography>
                            </Grid>
                      
                </Grid>
                <Grid item xs={6} style={{ backgroundColor: lightGreen[200], paddingLeft: 0, paddingRight: 0, 
                    marginTop: 10,borderRadius: 16, maxHeight: "max-content", marginBottom:50,
                    minHeight: "min-content", maxWidth: "40%", minWidth: "40%" }}>
                <Typography style={{ color: teal[800],fontSize:"2vw", fontWeight: 700, marginTop:40 }}>Our opening hours</Typography>
                <Typography  style={{ color: teal[800],  fontWeight: 500,fontSize:"1.2vw", marginTop:50 }}>Mon, Tue, Thu:</Typography> 
                <Typography   style={{ color: teal[800],  fontWeight: 500,fontSize:"1.2vw" }}>08:00 - 12:00 / 15:00 - 18:00</Typography> 
                <Typography   style={{ color: teal[800],  fontWeight: 500, marginTop:15, fontSize:"1.2vw" }}>Wed & Fri: </Typography> 
                <Typography  style={{ color: teal[800],  fontWeight: 500, fontSize:"1.2vw" }}>08:00 - 14:00</Typography> 
                <Typography  style={{ color: teal[800],  fontWeight: 500, marginTop:15, fontSize:"1.2vw" }}>Mon - Fri: </Typography> 
                <Typography  style={{ color: teal[800],  fontWeight: 500, fontSize:"1.2vw" }}>Private consultation by appointment</Typography> 
                </Grid>
                </Grid>

            </ScrollableAnchor>
        )
    }
}
