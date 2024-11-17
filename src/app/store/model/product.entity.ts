import {ProductOptions} from './product-options.entity';


export class Product {
  id: string;
  name: string;
  description: string;
  categories: string[];
  price: number;
  brand: string;
  stock: number;
  imageurl: string;
  options: ProductOptions;

  constructor(
    id: string,
    name: string,
    description: string,
    categories: string[],
    price: number,
    brand: string,
    stock: number,
    imageurl: string,
    options: ProductOptions
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.categories = categories;
    this.price = price;
    this.brand = brand;
    this.stock = stock;
    this.imageurl = imageurl;
    this.options = options;
  }
}
