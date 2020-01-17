export default function AverageReviews(item) {
  if (!item.ItemReview.length) return 0;
  const TotalReviews = item.ItemReview.length;
  const SumOfReviews = item.ItemReview.reduce((tally, next) => {
    return next.rating + tally;
  }, 0);
  const AverageRating = SumOfReviews / TotalReviews;
  return AverageRating;
}
