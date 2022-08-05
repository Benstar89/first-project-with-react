import React, { Component } from 'react';
import Card from "./Card";
import styled from "../styles/Cards.module.css";
import iphone10 from "../images/iphone10.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
    render() {
        return (
            <div className ={styled.Cards}>
                <Card name = "iPhone 10" img = {iphone10} price = "500"/>
                <Card name = "iPhone 11" img = {iphone11} price = "600"/>
                <Card name = "iPhone 12" img = {iphone12} price = "800"/>
                <Card name = "s21" img = {s21} price = "790"/>
            </div>
        );
    }
}

export default Cards;