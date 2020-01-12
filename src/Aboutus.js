import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import docxs from './doc comp xs2.png';
import docsm from './doc comp xs.png';
import docmd from './doc comp md.png';
import doclg from './doc comp lg.png';
import healthcaresm from "./healthcare sm.png"
import healthcaremd from "./healthcare md.png"
import healthcarelg from "./healthcare lg.png"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ScrollableAnchor from 'react-scrollable-anchor'
import ResponsiveImgMaterialUi from "responsive-img-material-ui";


export default class Aboutus extends Component {

    render() {
        return (
            <ScrollableAnchor id={'aboutus'}>
                <Grid container direction="row"  style={{ backgroundColor: lightGreen[100], minHeight:200 , maxHeight:700}}>
                    <Grid item xs style={{ backgroundColor: lightGreen[200], minHeight: "min-content",maxHeight:600, 
                    borderRadius:16, marginTop:60,paddingBottom:20,marginBottom:40,
                    minWidth: 180, maxWidth: 500, marginLeft: 80}}>
                <Typography  style={{ color: "white", fontSize:"1.5vw", fontWeight: 700, textAlign: "left", paddingTop:30, marginLeft:90 }}>
                    Dear patients,
                        </Typography>
                <Typography style={{ color: "white",fontWeight: 700, fontSize:"1.5vw", textAlign: "left", marginTop:15, marginLeft:90 }}>
                    welcome to our practice!
                            </Typography>

                <Typography style={{ color: "white", fontSize:"1.15vw", textAlign: "left", fontWeight: 500, marginTop:50, marginLeft:90,  marginRight:40 }}>
                    Our main goal is to find your individual therapy’s option 
                    with the help of our innovative, state-of-the-art technology.
                    We focus on the prevention and early diagnosis of disorders 
                    in respiratory, digestive and integumentary system.
 </Typography>
                <Typography  style={{ color: "white",  textAlign: "left", fontSize:"1.15vw", fontWeight: 500, marginBottom:50, marginTop:50, marginLeft:90,  marginRight:40 }}>
                    Your health matters! That’s why we only offer you high quality 
                    medical care. Our qualified medical AI-assistant Kaira assists 
                    Dr. Miller in the diagnostic and decision making process and makes 
                    recommendations based on findings.
</Typography>
</Grid>
<Grid item xs style={{ backgroundColor: lightGreen[100], minHeight: "max-content", maxHeight: 600, position: "relative",
borderRadius:16, minWidth: 180, maxWidth: 500, marginTop:100}}>

<ResponsiveImgMaterialUi xs={healthcaresm} sm={healthcaresm} md={healthcaremd} lg={healthcarelg} 
style={{float: "right", marginTop: 10}}></ResponsiveImgMaterialUi>

<ResponsiveImgMaterialUi xs={docxs} sm={docsm} md={docmd} lg={doclg} 
style={{float: "right", bottom: 0, position:"absolute"}} ></ResponsiveImgMaterialUi>
                
                </Grid>
                </Grid>
            </ScrollableAnchor>
        )
    }
}