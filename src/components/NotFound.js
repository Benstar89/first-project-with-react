import React, { Component } from 'react';
import styled from "../styles/NotFound.module.css";

class NotFound extends Component {
    render() {
        return (
            <div className={styled.notFoundPage}>
                <h1>Not Found :\</h1>
            </div>
        );
    }
}

export default NotFound;