import React, { Component } from 'react';
import styled from "../styles/Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <div className = {styled.Footer}>
                <h4>All Rights Reserved 2022</h4>
            </div>
        );
    }
}

export default Footer;