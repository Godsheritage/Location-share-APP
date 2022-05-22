import React from "react";
import Input from "../../shared/form Elements/Input";
import "./newPlace.css";

const NewPlace:React.FC = () => {
  return (
    <form action="" className="place-form">
      <Input type="text" label="Title" element="input" errorText="please enter a valid title" validators = {} />
    </form>
  );
};

export default NewPlace;
