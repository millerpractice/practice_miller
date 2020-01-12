import React, { Component } from 'react';
import pic from './welcome.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import { Container } from '@material-ui/core';


export default class Welcome extends Component{

    render(){
        return(
            configureAnchors({offset: -10}),
            <ScrollableAnchor id={'welcome'}>
                <Container style={{maxHeight:550, maxWidth:1519.2, marginTop:"13%", paddingLeft: "inherit", paddingRight: "inherit"}}>
    <img src={pic} alt="welcome" style={{width:"100%"}}/>
</Container>
</ScrollableAnchor>
        )
    }
}