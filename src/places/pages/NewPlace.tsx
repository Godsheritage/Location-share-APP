import React from "react";
import Input from "../../shared/form Elements/Input";
import "./newPlace.css";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";

const NewPlace: React.FC = () => {
  return (
    <form action="" className="place-form">
      <Input
        type="text"
        label="Title"
        element="input"
        errorText="please enter a valid title"
        validators={[VALIDATOR_REQUIRE()]}
      />
    </form>
  );
};

export default NewPlace;
