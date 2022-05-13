import React from "react";
import Card from "./shared/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList: React.FC<any> = ({ items }) => {
  if (items.length === 0) {
    <div className="place-list center">
      <Card>
        <h2>no places found maybe cretat one?</h2>
        <button>share a place</button>  
      </Card>
    </div>;
  }
  return <ul className="place-list">
      {items.map((place, index) => <PlaceItem key={index} place = {place}/> )}

  </ul>
};

export default PlaceList;
