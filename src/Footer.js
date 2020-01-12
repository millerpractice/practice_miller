import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import lightGreen from '@material-ui/core/colors/lightGreen';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return (
            <Paper square={true} style={{ backgroundColor: lightGreen[700], maxHeight: 64,height:"5vw",
             overflowX: "hidden", overflowY: "hidden", position:"relative" }}>
                <Typography style={{ color: "white", right: 0,fontSize:"1.05vw", bottom: 5, marginRight: 10, position:"absolute" }}>Practice Miller ©2020</Typography>
                <Link style={{color:'white', fontSize: "1.05vw", fontWeight: 500, textDecorationLine: 'blink', 
                  left: 0, marginLeft: 20, bottom: 5, position:"absolute"}} to="/imprint">Imprint</Link>
                <Link style={{color:'white', fontSize: "1.05vw", fontWeight: 500, textDecorationLine: 'blink', 
                  left: 0, marginLeft: 90, bottom: 5, position:"absolute"}} to="/privacy"> Privacy Policy</Link>
            </Paper>
        )
    }
}