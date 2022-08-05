import React, { Component } from 'react';
import styled from "../styles/AboutUs.module.css";
class AboutUs extends Component {
    render() {
        return (
            <div className={styled.continer}>
                <h1>Developer: </h1>
                <br />
                <h2>Benyamin Shakoori</h2>
                <br />
                <h3>*Based on Botostart React tutorial*</h3>
            </div>
        );
    }
}

export default AboutUs;