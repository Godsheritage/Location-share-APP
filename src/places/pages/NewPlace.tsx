import "./newPlace.css";
import { useCallback, useReducer } from "react";
import Input from "../../shared/form Elements/Input";
import { formActionTypes, initialFormState } from "../../types";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Button from "../../shared/form Elements/Button";

const NewPlace: React.FC = () => {
  const formReducer = (state: any, action: formActionTypes) => {
    let formIsValid = true;
    for (const inputId in state.inputs) {
      if (inputId === action.inputId) {
        formIsValid = formIsValid && action.isValid;
      } else {
        formIsValid = formIsValid && state.inputs[inputId].isValid;
      }
    }

    switch (action.type) {
      case "INPUT_CHANGE":
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid },
          },
          isValid: formIsValid,
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
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
    },
    []
  );

  const placeSubmitHandler = (event:any) =>{
    event.preventDefault()
    console.log(initialState.inputs)

  }

  return (
    <form action="" className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        type="text"
        id="title"
        label="Title"
        element="input"
        errorText="please enter a valid title"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      /> 
      <Input 
        id="description"
        label="Description" 
        element="textarea"
        errorText="description must be greater than 8 digits"
        onInput={inputHandler}
        validators={[VALIDATOR_MINLENGTH(8)]}
      />
        <Input
        type="text"
        id="Adress"
        label="Adress"
        element="input"
        errorText="please enter a valid address" 
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Button type="submit" disabled={!state.isValid}>Submit</Button>
    </form>
  );
};

export default NewPlace;
