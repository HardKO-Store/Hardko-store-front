

export class ReducedProduct {
  id: string;
  name: string;
  description: string;
  categories: string[];
  price: number;
  brand: string;
  imageurl: string;

  constructor(
    id: string,
    name: string,
    description: string,
    categories: string[],
    price: number,
    brand: string,
    imageurl: string) {

    this.id = id;
    this.name = name;
    this.description = description;
    this.categories = categories;
    this.price = price;
    this.brand = brand;
    this.imageurl = imageurl;
  }
}
