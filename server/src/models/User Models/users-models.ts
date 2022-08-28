import { userTypes } from './../../types';
import userModel from "./users-mongo";


export const getAllUsers = async () => {
  return await userModel.find({}, {__V:0})
};

//MODEL TO SIGN IN USERS
export const signInUsers = async (email: string, password: string) => {
  const foundUser = await userModel.findOne({ email });
  if (!foundUser) {
    return { message: "user not found", status:404};
  } else if (foundUser.password !== password) {
    return { message: "password is incorrect", status:404};
  } else {
    return { message: "logged in",status:200 ,foundUser };
  }
};

//MODEL TO SIGN UP USERS
export const signUpUsers:any = async (user:userTypes) => {
  const foundUser = await userModel.findOne({ email:user.email });
  if(foundUser){
    return {message:'User exists already, Login Instead', status:422}
  }
  let newUser = {
    name:user.name,
    email:user.email,
    password:user.password,
    image:user.image,
    places:user.places,
  };
  await userModel.create(newUser)
  return { message:'user has been created successfuly', status:'200', newUser };
};
