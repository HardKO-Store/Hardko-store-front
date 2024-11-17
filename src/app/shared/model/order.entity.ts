
import {OrderItem} from './order-item.entity';
import {Shipping} from '../../IAM/model/shipping.entity';

export class Order {
  id: string;
  orderDate: string;
  userId: string;
  status: string;
  totalAmount: number;
  items: OrderItem[];
  shipping: Shipping;

  constructor(
    id: string,
    orderDate: string,
    userId: string,
    status: string,
    totalAmount: number,
    items: OrderItem[],
    shipping: Shipping) {

    this.id = id;
    this.orderDate = orderDate;
    this.userId = userId;
    this.status = status;
    this.totalAmount = totalAmount;
    this.items = items;
    this.shipping = shipping;
  }
}
