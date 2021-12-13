import React, { Component } from 'react'
import { useParams } from "react-router";
import {getGameByID} from "../services/fakeGameLibrary";


const Game = (props) => {
    const {name} = useParams();
    const game = getGameByID(name);
    return (
        <div className = "contentAbout">
         <article className = "about">
             <h1>{game.name}</h1>
             <p>{game.description} 
             </p>

         </article>
         <article className = "about">
             <h2>Rules</h2>
             
            <p>
                {name}
            </p>
                 
         </article>      
        <article className = "about">
            <h2>Contact us</h2>
            <a href = "mailto:lendboxInfo@gmail.com">Click here to send us an email!</a>
        </article>
        </div>
    )
    
}
export default Game
