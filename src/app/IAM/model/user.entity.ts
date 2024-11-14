

import {UserAddress} from './user-address.entity';

export class User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: UserAddress;
  favoriteProducts: string[];

  constructor(
    userId: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: UserAddress,
    favoriteProducts: string[]) {

    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.address = address;
    this.favoriteProducts = favoriteProducts;
  }
}
