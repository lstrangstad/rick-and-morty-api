import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card">
      <img
        className="card__img"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Name"
      />
      <div className="card__content">
        <h1 className="card__name">
          <a className="card__link" href="">
            Rick Sanchez
          </a>
        </h1>
        <p className="card__species">Species: Human</p>
        <p className="card__status">Status: Alive</p>
      </div>
    </div>
  );
};
