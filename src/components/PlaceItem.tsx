import React from "react";
import Card from "./shared/UIElements/Card";
import { placeItems } from "../types";

const PlaceItem: React.FC<placeItems> = ({ placeItem }) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={placeItem.image} alt={placeItem.title} />
        </div>
        <div className="place-item__info">
          <h2>{placeItem.title}</h2>
          <h3>{placeItem.address}</h3>
          <p>{placeItem.description}</p>
        </div>
        <div className="place-item__actions">
          <button>view on map</button>
          <button>edit</button>
          <button>delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
