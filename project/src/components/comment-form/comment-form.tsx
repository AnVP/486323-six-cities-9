import React, {useState, ChangeEvent} from 'react';
import {ratingList} from '../../const';

function CommentForm(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const handleRatingChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setRating(Number(value));
  };
  const handleCommentChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(target.value);
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingList.map((ratingItem, index) => (
            <React.Fragment key={ratingItem.id}>
              <input onChange={handleRatingChange}
                checked={(ratingList.length - index) === Number(rating)}
                className="form__rating-input visually-hidden"
                name="rating" value={ratingList.length - index}
                id={ratingItem.id} type="radio"
              />
              <label htmlFor={ratingItem.id}
                className="reviews__rating-label form__rating-label"
                title={ratingItem.title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          ))
        }
      </div>
      <textarea onChange={handleCommentChange}
        value={comment} className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
