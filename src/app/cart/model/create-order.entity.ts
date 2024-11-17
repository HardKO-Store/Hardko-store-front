
import {OrderItem} from '../../shared/model/order-item.entity';

export class CreateOrder {
  orderDate: Date;
  userId: string;
  totalAmount: number;
  items: OrderItem[];

  constructor(
    orderDate: Date,
    userId: string,
    totalAmount: number,
    items: OrderItem[]) {

    this.orderDate = orderDate;
    this.userId = userId;
    this.totalAmount = totalAmount;
    this.items = items;
  }
}
