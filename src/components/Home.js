import React, { Component } from 'react'
import video1 from "../images/LendboxIntro.mp4";
import wave from '../images/wave.svg'


const Home = (props) => {
    return (
        <div className="contentHome">
         <h1>Welcome to LendBox</h1> 
         <p>The free way to try board games</p>
         <video src={video1} controls="controls" />

        </div>
    )
    
}
export default Home
