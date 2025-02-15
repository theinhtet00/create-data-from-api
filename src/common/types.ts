export interface Hair {
  color: string;
  type: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinate;
  country: string;
}

export interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthdate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  universtiy: string;
  bank: Bank;
  company: Company;
  esin: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}
