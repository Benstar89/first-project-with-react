import React, { Component } from 'react';
import styled from "../styles/Card.module.css";
import downimg from "../images/down.svg";
import upimg from "../images/up.svg";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nProducts :0,
        }
    }
    up = () => {
        this.setState(prev =>({
            nProducts :prev.nProducts + 1,
        }))
    }
    down = () => {
        if(this.state.nProducts > 0){
            this.setState(prev => ({
                nProducts: prev.nProducts - 1,
            }))
        }
    }
    render() {
        const {price} = this.props;
        const {nProducts} = this.state;
        return (
            <div className={styled.Card}>
                <img src = {this.props.img} alt = "pic"/>
                <div className={styled.texts}>
                    <p>{this.props.name}</p>
                    <p>${this.props.price} {nProducts ? `* ${nProducts} = ${nProducts * price}`: ""}</p>
                </div>
                <div className={styled.line}></div>
                <div className={styled.add}>
                    <img src = {downimg} onClick = {this.down} className={this.state.nProducts ? "" : styled.notActive}/>
                    <div>{this.state.nProducts}</div>
                    <img src = {upimg} onClick = {this.up}/>
                </div>
            </div>
        );
    }
}

export default Card;