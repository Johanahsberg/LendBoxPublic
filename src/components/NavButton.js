import React from 'react'

const NavButton = (props) => {
   
    
    return (
        <div className="buttonDiv">
            <button onClick={props.onClick}> {props.icon} {props.name}</button>
        </div>
    )
}

export default NavButton
