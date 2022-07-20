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

interface LatLng {
  lat: number;
  lng: number;
}
export interface mapTypes {
  center: LatLng;
  zoom: number;
  style: {
    width: string;
    height: string;
  };
}

export interface reducerStateTypes {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

export interface reducerActionTypes {
  type: string;
  val?: string;
  validators?: any;
}

export interface inputPropTypes {
  value?:string;
  type?: string;
  label: string;
  element: string;
  id?: string;
  errorText: string;
  validators: any;
  onInput: any;
}

export interface initialFormState {
  inputs: {
    title: {
      value: string;
      isValid: boolean;
    };
    description: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
}

export interface formActionTypes {
  type: string;
  inputId: string;
  value: string;
  isValid: boolean;
}

export interface formReducerTypes {
  formReducer: (state: any, action: formActionTypes) => void;
}
