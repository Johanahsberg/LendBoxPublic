import React from 'react'
import NavButton from './NavButton'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faDice, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/logo.svg'

const homeIcon = <FontAwesomeIcon icon={faHome} />
const profileIcon = <FontAwesomeIcon icon={faUserAlt} />
const gamesIcon = <FontAwesomeIcon icon={faDice} />
const aboutUsIcon = <FontAwesomeIcon icon={faLightbulb} />

class SideNav extends React.Component {
    state = {
        buttons : [
            {id: 1, name: 'Home', icon: homeIcon }, 
            {id: 2, name: 'Profile', icon: profileIcon }, 
            {id: 3, name: 'Games', icon: gamesIcon }, 
            {id: 4, name: 'About us', icon: aboutUsIcon }, 
        ]
    }

    handleClick(btn){
        console.log('hello '+btn);
    }
    
    render() { 
        return <div className="sideNavDiv">
            <img src={logo} alt="its out brightful logo"></img>
            <hr></hr>
            <ul>{this.state.buttons.map((button) => (<li key={button.id}><NavButton onClick={()=>this.handleClick(button.name)} name={button.name} icon={button.icon}/></li>))}</ul>      
        </div>
    }
}
 
export default SideNav;
