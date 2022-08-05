import React, { Component } from 'react';
import axios from "axios";
import Card from "./Card";
import styled from "../styles/Products.module.css";
class Products extends Component {
    constructor(){
        super();
        this.state = {
            item : []
        }
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                this.setState({
                    item : response.data,
                })
            })
    }
    render() {
        const { id,title , image , price ,category} = this.state.item;
        const {item} = this.state;
        return (
            <div className = {styled.store}>
               
                {                
                item.length ? this.state.item.map(product => <Card key = {product.id} img = {product.image} price = {product.price} name = {product.category}/>)  
                : <h1>Loding...</h1>
                }
            </div>
        );
    }
}

export default Products;