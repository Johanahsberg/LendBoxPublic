import React, { Component } from "react";
import { useParams } from "react-router";
import { getGameByID } from "../services/fakeGameLibrary";

const Game = (props) => {
  const { name } = useParams();
  console.log(name);
  const game = getGameByID(name);
  return (
    <div className="contentGame">
      <div className="gameInfo">
        <article className="about">
          <h1>{game.name}</h1>
          <p>{game.description}</p>
        </article>

        <article className="about">
          <p>Min players: {game.minplayers} </p>
          <p>Max players: {game.maxplayers} </p>
          <p>Price: {game.price} SEK </p>
          <p>Genres: {game.genres} </p>
          <p>Is available for booking: {game.booked ? "No":"Yes"} </p>

        </article>

        <button onClick= {()=> window.location.href = "/LendBoxPublic/#/Register"} id="signUpHomeBtn" type="button" className="btn btn-info btn-lg">Book</button>
      </div>
      <div className="gameImageDiv">
        <picture class="gameImage">
          <img src={game.picture} alt={game.name} />
        </picture>
      </div>
    </div>
  );
};
export default Game;
