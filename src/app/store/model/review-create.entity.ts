export class ReviewCreateEntity {
  productId: string;
  userId: string;
  rating: number;
  title: string;
  comment: string;

  constructor(
    productId: string,
    userId: string,
    rating: number,
    title: string,
    comment: string,
  ) {
    this.productId = productId;
    this.userId = userId;
    this.rating = rating;
    this.title = title;
    this.comment = comment;
  }
}
