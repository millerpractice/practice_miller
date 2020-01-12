import React, { Component } from 'react';
import lightGreen from '@material-ui/core/colors/lightGreen';
import teal from '@material-ui/core/colors/teal';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class Imprint extends Component {

    render() {
        return (
            <Grid container justify="center" style={{ backgroundColor: lightGreen[300], height: "110vw", overflowX: "hidden" }}>
                <Grid style={{
                    backgroundColor: lightGreen[200], height: "50vw", maxWidth: "60%",minWidth: "60%", paddingTop: 30, marginTop: 50,
                    borderRadius: 16
                }}>
                    <Typography style={{ color: teal[800], fontSize: "2vw", fontWeight: 700 }} >Imprint</Typography>
                    <Typography style={{ color: teal[800], fontSize: "1.15vw", fontWeight: 700, marginTop: 50 }}>Practice Miller</Typography>
                    <Typography style={{ color: teal[800], fontSize: "1.15vw", fontWeight: 500, marginTop:10 }}>Liebigstraße 62</Typography>
                    <Typography style={{ color: teal[800], fontSize: "1.15vw", fontWeight: 500 }}>64293 Darmstadt </Typography>
                    <Typography style={{ color: teal[800], fontSize: "1.15vw", fontWeight: 500 }}>Germany</Typography>
                    <Typography style={{ color: teal[800], fontSize: "1.15vw", fontWeight: 500, marginTop: 50 }}>Phone: 01745687998</Typography>
                    <Typography style={{ color: teal[800], fontSize: "1.15vw", fontWeight: 500, marginTop: 15 }}>Email: info_praxismiller@web.de</Typography>
                    <Typography style={{ color: teal[800], fontSize: "1.15vw", fontWeight: 500, marginTop:50 }}>Service provider for the offer of this website is Practice Miller.</Typography>
                </Grid>
            </Grid>
        )
    }
}