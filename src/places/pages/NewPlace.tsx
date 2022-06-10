import "./newPlace.css";
import Input from "../../shared/form Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useReducer } from "react";


const NewPlace: React.FC = () => {
  const formReducer = () =>{

  }
  const initialState ={
    inputs:{
      
    }
  }
  useReducer(formReducer, initialState)
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
