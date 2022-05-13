export interface userItemTypes {
  image: string;
  name: string;
  places: Number;
}

export interface placeTypes {
  id: string;
  description: string;
  address: string;
  image: string;
  loation: { lat: string; lng: string };
  title: string;
  creator: string;
}
