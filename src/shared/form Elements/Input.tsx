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
 const [inputReducer, dispatch] = useReducer(inputReducer, {value:'', isValid:false});
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
