import "./auth.css";
import Input from "../../shared/form Elements/Input";
import Card from "../../shared/UIElements/Card";
import Button from "../../shared/form Elements/Button";

const Auth = () => {
  
  return (
    <Card className= "authenicaton"> 
      <h2>Login Required</h2>
      <hr />
      <form action="">
        
        <Input type="email"
         id="email"
         element="input"
         label="E-mail"
         />
        <Input type="password"
         id="password"
         element="input"
         label="Password"
         />
        <Button type='submit'>LOGIN</Button>
      </form>
    </Card>
  );
};

export default Auth;
