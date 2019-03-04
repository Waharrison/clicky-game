import React from "react";
import "./card.css"

const Card = props => (
   <div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.url} />
    </div>
   
  </div>
);

export default Card;