import React from "react";
import Input from "../../shared/form Elements/Input";
import Button from "../../shared/form Elements/Button";
import { useParams } from "react-router-dom";
import { DUMMY_PLACES } from "../../users/pages/UserPlaces";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((places) => places.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>no identified place found</h2>
      </div>
    );
  }
  return <div>
    <Input
    type="text"
    id="title"
    element="input"
    label="Title"   
validators={[VALIDATOR_REQUIRE()]}

errorText="please enter a valid input"
value={identifiedPlace.title}
valid={true}
onInput={()=>{}}
    />
  </div>;
};

export default UpdatePlace;
