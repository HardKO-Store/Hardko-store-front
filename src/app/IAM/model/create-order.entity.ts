
import {OrderItem} from './order-item.entity';

export class CreateOrder {
  orderDate: string;
  userId: string;
  totalAmount: number;
  items: OrderItem[];

  constructor(
    orderDate: string,
    userId: string,
    totalAmount: number,
    items: OrderItem[]) {

    this.orderDate = orderDate;
    this.userId = userId;
    this.totalAmount = totalAmount;
    this.items = items;
  }
}
