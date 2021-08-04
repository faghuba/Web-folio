import React from 'react'
import { Button } from './Button'
import './BannerWrapper.css'
import '../App.css'

function BannerWrapper() {
    return (
        <div className="banner-container">
            <video src="./videos/video-2.mp4" autoPlay loop muted></video>
            <h1>adventure awaits</h1>
            <p>What are you waiting for?</p>
            <div className="banner-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' >get started</Button>
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' >watch trailer <i className="far fa-play-circle"></i></Button>
            </div>
        </div>
    )
}

export default BannerWrapper
