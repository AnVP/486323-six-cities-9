import ReviewsItem from '../reviews-item/reviews-item';
import {Review} from '../../types/offers';
import {sortComments} from '../../utils';

type ReviewsListProps = {
  comments: Review[];
}

function ReviewsList({comments}: ReviewsListProps): JSX.Element {
  const sortedComments = sortComments(comments);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {
          sortedComments.map((comment) => (<ReviewsItem key={comment.id} comment={comment}/>))
        }
      </ul>
    </>
  );
}

export default ReviewsList;
