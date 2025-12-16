

export const reviews = [
  {
    id: 1,
    productid: 1,
    username: "Khubair Ali",
    date: "31/3/2021",
    rating: 4.5,
    review: "Nice Product i will recommend everyone to purchase this",
    isApproved: true
  },
  {
    id: 2,
    productid: 1,
    username: "Umair Arshad",
    date: "1/4/2021",
    rating: 5.0,
    review: "Highly recommended Product, Amazing product",
    isApproved: true
  },
  {
    id: 3,
    productid: 2,
    username: "Nasir Ali",
    date: "31/3/2021",
    rating: 4.5,
    review: "Nice Product i will recommend everyone to purchase this",
    isApproved: true
  },
  {
    id: 4,
    productid: 2,
    username: "Ali Arshad",
    date: "1/4/2021",
    rating: 2.0,
    review: "Not much recommended Product, very bad product",
    isApproved: true
  },
  



];

export const countReviews = (productID) => {
  let sum = 0;
  reviews.forEach((review) => {
    if (review.productid === productID) sum++;
  });
  return sum;
};
