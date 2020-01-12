import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import arztlg from "./prof md.png"
import arztmd from "./prof 230.png"
import arztsm from "./prof 180.png"
import kairalg from "./profile ai lg.png"
import kairamd from "./profile ai md.png"
import kairasm from "./profile ai sm.png"
import kairaxs from "./profile ai xs.png"
import ScrollableAnchor from 'react-scrollable-anchor'
import { Container } from '@material-ui/core';
import ResponsiveImgMaterialUi from "responsive-img-material-ui";


export default class Team extends Component {

    render() {
        return (
            <ScrollableAnchor id={'team'}>
                <Container  style={{ maxHeight: 700,height: "80vw", backgroundColor: lightGreen[500], marginRight:0, marginLeft:0, maxWidth:1519.2, postion:"absolute"}}>
                    <Typography  style={{ color: "white", paddingTop: 30,  fontSize: 30, textAlign: "center", }}>Our team</Typography>
                    <Grid container justify="space-around" spacing={1} style={{position:"relative"}}>
                        <Grid item xs={6} style={{minWidth: "40%", maxWidth: "40%", maxHeight: "fit-content",  position: "relative"}}>
                            <Grid container justify="space-between">
                                <Grid item xs style={{maxWidth: "30%", minWidth: "30%", minHeight: "fit-content",
    maxHeight: "fit-content"}}>
                        <ResponsiveImgMaterialUi xs={arztsm} sm={arztsm} md={arztmd} lg={arztlg} 
style={{float: "right", borderRadius:16, paddingTop:60 }}></ResponsiveImgMaterialUi>
                           </Grid> 
                           
    <Grid item xs style={{maxWidth: "70%", minWidth: "70%", minHeight: "fit-content",
    maxHeight: "fit-content"}}>
                            <Typography  style={{ color: "white", paddingTop: 70,  position:"relative",
                            fontSize: "1.15vw", textAlign: "left"}}>
                                Dr. Moris Miller studied medicine at the university in Frankfurt am Main.
    </Typography>

                            <Typography  style={{ color: "white",  textAlign: "left",fontSize: "1.15vw", paddingTop:20}}>
                                After his graduation in 1998,
                                he gained experience in different clinics and medical centers and spent a couple of years in England where he gathered
                                expert knowledge in the fields of surgical diagnostic and therapy, cardiology, radiology and rehabilitation. At that time Dr. Miller
                                was announced Member of the Royal College of General Practitioners in London.
    </Typography>
   
                            <Typography style={{ color: "white",  fontSize: "1.15vw", 
                            textAlign: "left",paddingTop: 20}}>
                                After he successfully received his degree in general and internal medicine from the State Chamber
                                 of Medicine in Hessen in 2016, he founded his own practice in Darmstadt.
</Typography>
</Grid>
</Grid>
                        </Grid>
                        <Grid item xs={6} style={{minWidth: "40%", maxWidth: "40%", maxHeight: "fit-content",  position: "relative"}}>
                        <Grid container justify="space-between">
                                <Grid item xs style={{maxWidth: "30%", minWidth: "30%", minHeight: "fit-content",
    maxHeight: "fit-content"}}>
                        <ResponsiveImgMaterialUi xs={kairaxs} sm={kairasm} md={kairamd} lg={kairalg} 
style={{float: "right", paddingTop: 50}}></ResponsiveImgMaterialUi>
                           </Grid> 
                           <Grid item xs style={{maxWidth: "70%", minWidth: "70%", minHeight: "fit-content",
    maxHeight: "fit-content"}}>
                            <Typography style={{ color: "white", fontSize: "1.15vw", paddingTop: 70,  textAlign: "left" }}>
                                Kaira is working as Dr. Miller’s qualified medical assistant since 2018.
</Typography>
                            <Typography style={{ color: "white", fontSize: "1.15vw", paddingTop: 20, textAlign: "left"}}>
                                She was developed from researchers from Showa University
                                in Yokohama, Japan in 2017.  Trained on extensive data from 378,256 patients she can reveal signs of potentially cancerous growths
                                in the colon with a 95% accuracy rate. Reviewing mammograms’ data  30 times faster than humans, she can make quick judgment call,
                                such as determining if a lesion is cancerous and make a lifetime decision.
</Typography>
                            <Typography style={{ color: "white",fontSize: "1.15vw",  textAlign: "left", paddingTop: 20}}>
                                Besides cancer prediction Kaira is currently supporting Dr. Miller to diagnose diseases such as asthma, diabetes and skin disease.
    </Typography>
    </Grid>
    </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </ScrollableAnchor>
        )
    }
}
