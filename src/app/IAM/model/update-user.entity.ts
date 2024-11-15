import {UserAddress} from './user-address.entity';

export class UpdateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  city: string;
  street: string;
  zip: string;
  newFavoriteProductId: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: UserAddress,
    newFavoriteProductId: string) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.country = address.country;
    this.city = address.city;
    this.street = address.street;
    this.zip = address.zip;
    this.newFavoriteProductId = newFavoriteProductId;
  }
}
