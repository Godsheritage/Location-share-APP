import React from "react";
import { placeItems } from "../types";
import Card from "./shared/UIElements/Card";
import Button from "./shared/form Elements/Button";

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
          <Button inverse>view on map</Button>
          <Button to = {`/places/${placeItem.id}`}>edit</Button>
          <Button danger>delete</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
