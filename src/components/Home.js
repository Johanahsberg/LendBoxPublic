import React, { Component } from 'react'
import video1 from "../images/LendboxIntro.mp4";


const Home = (props) => {
    return (
        <div className="contentHome">
         <h1>Welcome to LendBox</h1> 
         <p>The free way to try board games</p>
         <video src={video1} controls="controls" autoplay="true" />
         
        <svg width="1440" height="436" viewBox="0 0 1440 436" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M515.629 93.7271C245.197 62.3748 57.1438 157.019 -33 176.864V260H1440V14.1135C1359.89 -20.832 1136.19 17.5247 1070.12 38.7725C770.393 135.154 637.334 114.511 515.629 93.7271Z" fill="#B1F2F2"/>
            <path d="M1046.31 157.521C1384.3 107.84 1619.34 257.814 1732 289.261V421H-109V31.3645C-8.87915 -24.0107 270.71 36.7699 353.293 70.4395C727.895 223.168 894.196 190.456 1046.31 157.521Z" fill="#9AE8E8"/>
            <path d="M442.655 184.381C147.072 139.764 -58.4722 274.45 -157 302.69V421H1453V71.0846C1365.44 21.3545 1120.93 75.939 1048.71 106.176C721.114 243.335 575.68 213.958 442.655 184.381Z" fill="#8BE0E0"/>
            <path d="M514.283 282.68C218.883 253.016 13.4667 342.564 -85 361.34V440H1524V207.354C1436.5 174.29 1192.14 210.581 1119.96 230.685C792.569 321.877 647.225 302.345 514.283 282.68Z" fill="#57B0B0"/>
        </svg>

        </div>
    )
    
}
export default Home
