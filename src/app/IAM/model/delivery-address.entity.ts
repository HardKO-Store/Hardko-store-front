

export class DeliveryAddress {
  country: string;
  city: string;
  street: string;
  zipCode: string;

  constructor(
    country: string,
    city: string,
    street: string,
    zipCode: string) {

    this.country = country;
    this.city = city;
    this.street = street;
    this.zipCode = zipCode;
  }
}
