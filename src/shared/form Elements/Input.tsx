import { useReducer, useEffect } from "react";
import {
  reducerStateTypes,
  reducerActionTypes,
  inputPropTypes,
} from "../../types";
import "./input.css";
import { validate } from "../util/validators";


//reducer
const inputReducer = (state: reducerStateTypes, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

//initial reducer state
const initialState = {
  value: "",
  isValid: false,
  isTouched: false,
};


const Input: React.FC<inputPropTypes> = ({
  type,
  label,
  element,
  id,
  errorText,
  validators,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  //input onChange 
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: validators,
    });
  };

  // touch handler
  const touchHandlander = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const elements =
    element === "input" ? (
      <input
        type={type}
        id={id}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandlander}
      />
    ) : (
      <textarea
        id={id}
        rows={3}
        value={inputState.value}
        onBlur={touchHandlander}
      />
    );
  return (
    <div
      className={`form-control 
        ${
          !inputState.isValid && inputState.isTouched && `form-control--invalid`
        }
      `}
    >
      <label htmlFor={id}>{label}</label>
      {elements}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
