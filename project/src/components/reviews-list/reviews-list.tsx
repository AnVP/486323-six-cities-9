import ReviewsItem from '../reviews-item/reviews-item';
import {Review} from '../../types/offers';

type ReviewsListProps = {
  comments: Review[];
}

function ReviewsList({comments}: ReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          comments.map((comment) => (<ReviewsItem key={comment.id} comment={comment}/>))
        }
      </ul>
    </>
  );
}

export default ReviewsList;
