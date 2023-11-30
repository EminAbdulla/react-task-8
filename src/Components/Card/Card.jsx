import React from "react";
import './Card.css'
const Card = ({ item }) => {
  return (
    <div className="col__4">
      <div className="card__id"><span>Id:</span> {item.id}</div>
      <div className="card__name"><span>Name:</span> {item.name}</div>
      <div className="card__mail"><span>Email:</span> {item.email}</div>
      <div className="card__comment"><span>Comment:</span> {item.body}</div>
    </div>
  );
};

export default Card;
