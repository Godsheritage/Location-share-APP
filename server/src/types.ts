export interface placeTypes {
  items: {
    id: string;
    description: string;
    address: string;
    image: string;
    location: { lat: number; lng: number };
    title: string;
    creator: string;
  };
}

// export interface  {
//   name: string;
//   email: string;
//   password: string;
//   image:string;
//   places:string
// }

 export interface userTypes {
  name: string;
  email: string;
  password: string;
  image: string;
  places: string;
 }
// } => Promise<{
//   message: string;
//   status: number;
//   newUser?: undefined;
// } | {
//   message: string;
//   status: string;
//   newUser: {
//       name: string;
//       email: string;
//       password: string;
//       image: string;
//       places: string;
//   };

