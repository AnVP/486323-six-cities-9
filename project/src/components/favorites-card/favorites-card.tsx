import {Link} from 'react-router-dom';
import classNames from 'classnames';
import {Offer} from '../../types/offers';
import {fetchFavoriteStatusAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type OfferProps = {
  offer: Offer;
}

function FavoritesCard(props: OfferProps): JSX.Element {
  const {offer} = props;
  const dispatch = useAppDispatch();

  const buttonClassName = classNames({
    'button': true,
    'place-card__bookmark-button': true,
    'place-card__bookmark-button--active': offer.isFavorite,
  });

  const handleFavoriteButtonClick = (id: number) => {
    dispatch(fetchFavoriteStatusAction({id, favoriteStatus: offer.isFavorite}));
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={buttonClassName}
            type="button"
            onClick={() => {
              handleFavoriteButtonClick(offer.id);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
