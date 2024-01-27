import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} className="item-img" />
      </Link>
      <p>{props.name}</p>
      <div className="price">
        <div className="new-price">${props.new_price}</div>
        <div className="old-price">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
