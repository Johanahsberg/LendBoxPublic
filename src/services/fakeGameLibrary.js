import catanImg from "../images/catan.jpg";
import pandemicImg from "../images/pandemic.jpg";
import codenameImg from "../images/codenames.jpg";

const gamesArray = [
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
    }
]

export function getGameByID(name){
    return gamesArray.find(g=>g.name===name)
}