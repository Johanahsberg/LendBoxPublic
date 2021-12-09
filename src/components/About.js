import React, { Component } from 'react'


const About = (props) => {
    return (
        <div className = "contentAbout">
         <article className = "about">
             <h1>About us</h1>
             <p>LendBox is an organisation that encourages people to try out board games with family and friends fully free of charge.
             
             </p>
         </article>
         <article className = "about">
             <h2>Rules</h2>
             
                 <p>Any person can rent a game free of charge for a maximum of 14 days.</p>
                 <p>The rented game must be returned with all the pieces included and in good condition.</p>
                 <p>If a piece is missing or the board game is defective the renter is ressponsible for finding a replacement for the missing item or board</p>
                 <p>If the renter can not replace the item she/he is liable for compensation of a pristine version of the rented board game.</p>
                 <p>If a board game is overdue, an email will be sent to the renter to remind them of returning the game as soon as possible.</p>
         </article>      
        <article className = "about">
            <h2>Contact us</h2>
            <a href = "mailto:lendboxInfo@gmail.com">Click here to send us an email!</a>
        </article>
        </div>
    )
    
}
export default About
