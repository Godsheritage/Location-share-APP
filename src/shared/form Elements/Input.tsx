import { useReducer } from "react";
import { stateTypes, actionTypes } from "../../types";
import "./input.css";

const inputReducer = (state: stateTypes, action: actionTypes) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input: React.FC<any> = ({ type, label, element, id, errorText }) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
    });
  };

  const elements =
    element === "input" ? (
      <input type={type} id={id} value={inputState.value} />
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
