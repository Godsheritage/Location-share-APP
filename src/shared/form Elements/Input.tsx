import React, { useReducer } from "react";
import "./input.css";

const inputReducer:any = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input: React.FC<any> = ({ type, label, element, id }) => {
 const [inputState, dispatch] = useReducer(inputReducer, {value:'', isValid:false});

 const changeHandler = (e) => {
 dispatch({
   type: 'CHANGE',
    val:e.tatget.value
 })
 }



  const elements =
    element === "input" ? (
      <input type={type} id={id} value={inputState.value} />
    ) : (
      <textarea id={id} rows={3} value = {inputState.value}/>
    );
  return (
    <div className={`form-control` ${!inputState.isValid && 'form-control--invalid'}}>
      <label htmlFor={id}>{label}</label>
      {elements}
      {!inputState.isValid && <p>{errorText}</p>}
    </div>
  );
};

export default Input;
