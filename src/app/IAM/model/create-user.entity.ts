
export class CreateUser {
  firstName: string | null;
  lastName: string| null;
  email: string| null;
  password: string| null;
  country: string| null;
  city: string| null;
  street: string| null;
  zip: string| null;

  constructor(
    firstName: string| null,
    lastName: string| null,
    email: string| null,
    password: string| null,
    country: string| null,
    city: string| null,
    street: string| null,
    zip: string| null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.country = country;
    this.city = city;
    this.street = street;
    this.zip = zip;
  }
}
