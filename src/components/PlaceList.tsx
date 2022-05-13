import React from "react";
import Card from "./shared/UIElements/Card";

const PlaceList: React.FC<any> = ({ items }) => {
  if (items.length === 0) {
    <div className="place-list center">
      <Card>
        <h2>no places found maybe cretat one?</h2>
        <button>share a place</button>  
      </Card>
    </div>;
  }
  return <div>PlaceList</div>;
};

export default PlaceList;
