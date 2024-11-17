
import {DeliveryAddress} from './delivery-address.entity';

export class Shipping {
  deliveryAddress: DeliveryAddress;
  trackingNumber: string;

  constructor(
    deliveryAddress: DeliveryAddress,
    trackingNumber: string) {

    this.deliveryAddress = deliveryAddress;
    this.trackingNumber = trackingNumber;
  }
}
