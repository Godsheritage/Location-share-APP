import "./auth.css";
import React, { useState, useContext} from "react";
import AuthContext from "../../shared/context/AuthContext";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/form Elements/Input";
import Button from "../../shared/form Elements/Button";
import { contextTypes } from "../../types";

const Auth = () => {
  const {login} = useContext(AuthContext) as contextTypes

  const authSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    login()
  };


  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  return (
    <div style = {{margin:"auto"}}>

    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form action="" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input element="input" type="text" id="name" label="Your Name" />
        )}
        <Input type="email" id="email" element="input" label="E-mail" />
        <Input type="password" id="password" element="input" label="Password" />
        <Button type="submit">{isLoginMode ? "LOGIN" : "SIGN UP"}</Button>
      </form>
      <Button inverse onClick={() => setIsLoginMode(!isLoginMode)}>
        {isLoginMode ? "SIGN UP" : "LOG IN"}
      </Button>
    </Card>
    </div>
  );
};

export default Auth;
