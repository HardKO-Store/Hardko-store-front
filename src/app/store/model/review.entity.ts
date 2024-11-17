
export class Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;
  title: string;
  comment: string;
  likes: number;

  constructor(
    id: string,
    productId: string,
    userId: string,
    rating: number,
    title: string,
    comment: string,
    likes: number
  ) {
    this.id = id;
    this.productId = productId;
    this.userId = userId;
    this.rating = rating;
    this.title = title;
    this.comment = comment;
    this.likes = likes;
  }
}
