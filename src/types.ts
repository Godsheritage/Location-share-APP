export interface placeTypes {
  items: {
    id: string;
    description: string;
    address: string;
    image: string;
    loation: { lat: number; lng: number };
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
    loation: { lat: number; lng: number };
    title: string;
    creator: string;
  };
}

export interface userItems {
  items: {
    id: string;
    name: string;
    places: number;
    image: string;
  }[];
}

export interface user {
  user: {
    id: string;
    image: string;
    name: string;
    places: number;
  };
}
