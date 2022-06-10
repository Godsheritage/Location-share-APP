import "./newPlace.css";
import Input from "../../shared/form Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useReducer } from "react";
import { formActionTypes, initialFormState } from "../../types";

const NewPlace: React.FC = () => {
  const formReducer = (state: initialFormState, action: formActionTypes) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        return {
          ...state,
        };
      default:
        return state;
    }
  };

  const initialState: initialFormState = {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      isValid: false,
    },
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const inputHandler = () => {

  }

  return (
    <form action="" className="place-form">
      <Input
        type="text"
        id="title"
        label="Title"
        element="input"
        errorText="please enter a valid title"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      />
    </form>
  );
};

export default NewPlace;
