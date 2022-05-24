import React from 'react'
import "./card.css"

const Card = (props) => {
  return (
    <div className={`container ${props.bgcolor}`}>
      <div className="top">
      <p>{props.date}</p>
      <img src={props.logo} alt="logo"/></div>
      <div className="middle">
      <p>{props.title}</p>
      <p>{props.comptitle}</p>
      </div>
      <div className="bottom">   
      <p>{props.mode}</p>
      <p>{props.icon}</p></div>
    </div>
  )
}

export default Card


