import React from "react";
import Input from "../../shared/form Elements/Input";
import Button from "../../shared/form Elements/Button";
import { useParams } from "react-router-dom";
import { DUMMY_PLACES } from "../../users/pages/UserPlaces";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

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
  return (
    <form>
      <Input
        type="text"
        id="title"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="please enter a valid input"
        value={identifiedPlace.title}
        valid={true}
        onInput={() => {}}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="please enter a valid description (min 5 characters)"
        value={identifiedPlace.description}
        valid={true}
        onInput={() => {}}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
