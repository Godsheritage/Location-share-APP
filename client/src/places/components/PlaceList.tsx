import React from "react";
import PlaceItem from "./PlaceItem";
import { placeTypes } from "../../types";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/form Elements/Button";

const PlaceList: React.FC<placeTypes > = ({ items }) => {
  if (items.length === 0) {
    <div className="place-list center">
      <Card>
        <h2>no places found maybe create one?</h2>
        <Button to='/places/new'>share a place</Button>  
      </Card>
    </div>;
  }
  return <ul className="place-list">
      {items.map((place, index) => <PlaceItem key={index} placeItem = {place}/> )}

  </ul>
};

export default PlaceList;
