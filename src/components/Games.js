import React from "react";
import NavButton from "./NavButton";
import Game from "./Game";
import {Route, Routes, Link} from 'react-router-dom';
import catanImg from "../images/catan.jpg";
import pandemicImg from "../images/pandemic.jpg";
import codenameImg from "../images/codenames.jpg";

class Games extends React.Component {
  state = {
    games: [
      {
        id: 1,
        name: "Catan",
        picture: catanImg,
        description:
          "Be the dominant force on the island of Catan by building settlements, cities, and roads.",
      },
      {
        id: 2,
        name: "Pandemic",
        picture: pandemicImg,
        description:
          "Your team of experts must prevent the world from succumbing to a viral pandemic.",
      },
      {
        id: 3,
        name: "Codename",
        picture: codenameImg,
        description:
          "Give your team clever one-word clues to help them spot their agents in the field.",
      },
    ],
  };

  handleClick(btn) {
    //window.location.href = `/LendBoxPublic/#/${btn}`;
  }
  sendProps(props){
    <Routes>
          <Route path={`/${props.name }`}
          element={<Game name={props.name} description={props.description} picture={props.picture}/>} 
         />
        </Routes>
  }
  
  
  render() {
    return (
      <div className = "contentGames">
        <h1>Games</h1>
        <div className="gamesGrid">
            {this.state.games.map((game) => (
              <li key={game.id}><Link to={`/Game/${game.name }`}>
                <article
                  onClick={() => this.sendProps(game)}
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
}

export default Games;
