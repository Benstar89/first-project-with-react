import React, { Component } from 'react';
import styled from "../styles/Header.module.css";
import {Link} from "react-router-dom";
import Logo from "../images/Logo.png"


class Header extends Component {
    render() {
        return (
            <div className = {styled.header}>
                <div className = {styled.leftside}>
                    <ul>
                        <li><Link to = "/">Home Page</Link></li>
                        <li><Link to = "/Products">Products</Link></li>
                        <li><Link to = "/AboutUs">About Us</Link></li>
                    </ul>
                </div>
                <div className = {styled.rightside}>
                    <img src = {Logo}/>
                </div>
            </div>
        );
    }
}

export default Header;