export interface Hair {
  color: string;
  type: string;
}

export interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

export interface Company {
  address: Address;
  department: string;
  name: string;
  title: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  hair: Hair;
  address: Address;
  company: Company;
}
