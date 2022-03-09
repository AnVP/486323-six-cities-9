import {Review} from '../../types/offers';

type CommentsProps = {
  comment: Review;
}

function ReviewsItem({comment}: CommentsProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={comment.avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{comment.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${comment.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.text}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{comment.time}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
