import React, { Component } from 'react'
import video1 from "../images/LendboxIntro.mp4";
import wave from '../images/wave.svg'


const Home = (props) => {
    return (
        <>
        <div className="contentHome">
        <h1>Welcome to LendBox</h1> 
         <p>The free way to try board games</p>
         <p id = "textHome">Sign up now to rent Board Games free of charge for 14 days</p>
         <button onClick= {()=> window.location.href = "/LendBoxPublic/#/Register"} id="signUpHomeBtn" type="button" className="btn btn-info btn-lg">Sign up</button>
        </div>
         <div className = "videoDiv">
             <video src={video1} controls="controls" />
         </div>
        </>
    )
    
}
export default Home
