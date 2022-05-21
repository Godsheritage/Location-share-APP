import React, {useReducer} from "react";
import "./input.css";

const inputReducer = (state, action) => {
  switch()
}




const Input: React.FC<any> = ({ type, label, element, id }) => {
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
