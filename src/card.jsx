import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h3 className="card-title">{props.title}</h3>
      <div class="card-about-div">
        <img className="card-img" src={props.img} alt="emoticon" />
        <p className="card-about">{props.about} </p>
      </div>
    </div>
  );
}

export default Card;
