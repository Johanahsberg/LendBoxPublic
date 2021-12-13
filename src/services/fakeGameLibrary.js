import catanImg from "../images/catan.jpg";
import pandemicImg from "../images/pandemic.jpg";
import codenameImg from "../images/codenames.jpg";
import ticketImg from "../images/ticket.jpg";

const gamesArray = [
    {
      id: 1,
      name: "Catan",
      picture: catanImg,
      description:
        "Be the dominant force on the island of Catan by building settlements, cities and roads.",
      minplayers: 3,
      maxplayers: 4,
      price: 399,
      genres: [ "Action, ", "Strategic" ],
      booked: false
    },
    {
      id: 2,
      name: "Pandemic",
      picture: pandemicImg,
      description:
        "Your team of experts must prevent the world from succumbing to a viral pandemic.",
      minplayers: 2,
      maxplayers: 4,
      price: 349,
      genres: ["Action", "Strategic"],
      booked: false
    },
    {
      id: 3,
      name: "Codenames",
      picture: codenameImg,
      description:
        "Give your team clever one-word clues to help them spot their agents in the field.",
      minplayers: 2,
      maxplayers: 8,
      price: 299,
      genres: ["Action", "Strategic"],
      booked: false
    }, {
        id: 4,
        name: "Ticket to Ride",
        picture: ticketImg,
        description:
          "Build your railroad across North America to connect cities and complete tickets.",
        minplayers: 2,
        maxplayers: 5,
        price: 499,
        genres: [ "Action, ", "Strategic" ],
        booked: false
    }
]

export function getGames(){
  return gamesArray;
}

export function getGameByID(name){
    return gamesArray.find(g=>g.name===name)
}