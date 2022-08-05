import React, { Component } from 'react';
import styled from "../styles/Search.module.css";

class Search extends Component {
    render() {
        return (
            <div className ={styled.searchBox}>
                <p>What Are You Looking For ?</p>
                <input type = "text"/>
            </div>
        );
    }
}

export default Search;