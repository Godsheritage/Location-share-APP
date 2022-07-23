import "./input.css";
import {
  reducerStateTypes,
  reducerActionTypes,
  inputPropTypes,
} from "../../types";
import { validate } from "../util/validators";
import { useReducer, useEffect } from "react";

// input reducer
// const inputReducer = (state: reducerStateTypes, action: any) => {
//   switch (action.type) {
//     case "CHANGE":
//       return {
//         ...state,
//         value: action.val,
//         isValid: validate(action.val, action.validators),
//       };
//     case "TOUCH":
//       return {
//         ...state,
//         isTouched: true,
//       };
//     default:
//       return state;
//   }
// };

//initial reducer state

const Input: React.FC<inputPropTypes> = ({
  type,
  label,
  element,
  id,
  errorText,
  validators,
  onInput,
  value,
  valid,
}) => {
  // const initialState = {
  //   value: value || "",
  //   isValid: valid || false,
  //   isTouched: false,
  // };
  // const [inputState, dispatch] = useReducer(inputReducer, initialState);

  // const { isValid } = initialState;
  // useEffect(() => {
  //   onInput(id, initialState.value, isValid);
  // }, [id, initialState.value, isValid, onInput]);

  //input onChange
  // const changeHandler = (e: any) => {
  //   dispatch({
  //     type: "CHANGE",
  //     val: e.target.value,
  //     validators,
  //   });
  // };

  // // touch handler
  // const touchHandlander = () => {
  //   dispatch({
  //     type: "TOUCH",
  //   });
  // };

  const elements =
    element === "input" ? (
      <input type={type} id={id} />
    ) : (
      <textarea id={id} rows={3} />
    );
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      {elements}
    </div>
  );
};

export default Input;
