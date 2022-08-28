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

export interface userTypes {
  name: string;
  email: string;
  password: string;
  image: string;
  places: string;
}
