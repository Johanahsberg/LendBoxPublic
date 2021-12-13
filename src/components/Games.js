import React from "react";
import {Route, Routes, Link} from 'react-router-dom';
import {getGameByID, getGames} from "../services/fakeGameLibrary";


const Games = () => {
    return (
      <div className = "contentGames">
        <h1>Games</h1>
        <div className="gamesGrid">
            {getGames().map((game) => (
              <li key={game.id}><Link to={`/Games/${game.name }`}>
                <article
                  name={game.name}
                  picture={game.picture}
                  className="gameCard"
                  >
                  <picture class="gameThumbnail">
                    <img src={game.picture} alt={game.name} />
                  </picture>
                  <div className="gameCard-content">
                    <p className="gameCategory">{game.name}</p>
                    <p>{game.description}</p>
                  </div>
                </article>
                </Link>
              </li>
            ))}
        </div>
      </div>
    );
  }

export default Games;
