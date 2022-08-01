
const users:any = [
    {
        name:"Godsheritage Adeoye",
        email:"adeoyegodsheritage@gmail.com",
        password:"test"
    }
];

export const getAllUsers = () => {
  return users;
};

export const signInUsers = (email:string, password:string) => {
    const foundUser = users.find((user:any) => user.email === email)
    if(!foundUser){
        return {message:"user not found"}
    } 
    else if(foundUser.password !== password ){
        return {message: "password is incorrect"}
    }
    else{
        return {message:"logged in", foundUser}
    }  
}

export const signUpUsers = (userName:string, email:string, password:string) => {
    const newUser = {
        userName, 
        email, 
        password
    }
    users.push(newUser)
    return newUser
}