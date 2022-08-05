import React, { Component } from 'react';
import bgImage from "../images/banner.jpg";
import styled from "../styles/Banner.module.css";

class Banner extends Component {
    render() {
        return (
            <div className = {styled.banner}>
                <img src = {bgImage} alt = "bgimage"/>
                <div className={styled.textArea}>
                    <h1>Botostart</h1>
                    <p>We're Learing React.js</p>
                </div>
            </div>
        );
    }
}

export default Banner;