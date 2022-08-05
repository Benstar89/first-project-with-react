import React, { Component } from 'react';
import styled from "../styles/Support.module.css";
import apple from "../images/apple.jpg";
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomi.png";



class Support extends Component {
    render() {
        return (
            <div className={styled.support}>
                <div className={styled.all}>
                    <h1>Who Support Us ?</h1>
                    <div className={styled.logos}>
                        <div className={styled.imgs}><img src = {apple} alt = "logo"/></div>
                        <div className={styled.imgs}><img src = {samsung} alt = "logo"/></div>
                        <div className={styled.imgs}><img src = {xiaomi} alt = "logo"/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Support;