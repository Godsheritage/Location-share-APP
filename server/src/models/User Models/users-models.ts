import userModel from "./users-mongo";

const users: any = [
  {
    name: "Godsheritage Adeoye",
    email: "adeoyegodsheritage@gmail.com",
    password: "test12345",
  },
];

export const getAllUsers = () => {
  return users;
};

//MODEL TO SIGN IN USERS
export const signInUsers = (email: string, password: string) => {
  const foundUser = userModel.findOne({ email });
  // const foundUser = users.find((user:any) => user.email === email)
  if (!foundUser) {
    return { message: "user not found" };
  } else if (foundUser.password !== password) {
    return { message: "password is incorrect" };
  } else {
    return { message: "logged in", foundUser };
  }
};

//MODEL TO SIGN UP USERS
export const signUpUsers = (name: string, email: string, password: string) => {
  const newUser = {
    name,
    email,
    password,
  };
  userModel.create(newUser)
//   users.push(newUser);
  return { user: newUser };
};
