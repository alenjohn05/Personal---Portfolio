import React, { Component } from 'react'
import './index.css'
export class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                <h1>Helloo World</h1>
                <div>
                    <img className="hero-image" src="https://signatureexpert.net/wp-content/uploads/2021/06/Abdul-signature-style-1024x585.jpg" alt=""/>
                </div>
            </div>
        )
    }
}

export default Hero
