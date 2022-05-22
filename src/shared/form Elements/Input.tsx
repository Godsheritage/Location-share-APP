import { useReducer } from "react";
import {
  reducerStateTypes,
  reducerActionTypes,
  inputPropTypes,
} from "../../types";
import "./input.css";
import { validate } from "../util/validators";

const inputReducer = (state: reducerStateTypes, action: reducerActionTypes) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    default:
      return state;
  }
};

const initialState = {
  value: "",
  isValid: false,
};

const Input: React.FC<inputPropTypes> = ({
  type,
  label,
  element,
  id,
  errorText,
  validators
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators:validators
    });
  };

  const elements =
    element === "input" ? (
      <input type={type} id={id} value={inputState.value} onChange={changeHandler}/>
    ) : (
      <textarea id={id} rows={3} value={inputState.value} />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && "form-control--invalid"
      }`}
    >
      <label htmlFor={id}>{label}</label>
      {elements}
      {!inputState.isValid && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
