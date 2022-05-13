export interface userItemTypes {
  image: string;
  name: string;
  places: Number;
}

export interface placeTypes {
  items: {
    id: string;
    description: string;
    address: string;
    image: string;
    loation: { lat: string; lng: string };
    title: string;
    creator: string;
  }[];
}

export interface placeItems {
  placeItem: {
    id: string;
    description: string;
    address: string;
    image: string;
    loation: { lat: string; lng: string };
    title: string;
    creator: string;
  };
}
