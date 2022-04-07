import {Link, useNavigate} from 'react-router-dom';
import classNames from 'classnames';
import {Offer} from '../../types/offers';
import {APIRoute, AuthorizationStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchFavoriteStatusAction, fetchFavoriteOffersAction} from '../../store/api-actions';
import {useState} from 'react';

type OfferProps = {
  offer: Offer;
  onMouseOver: (item: number) => void;
  onMouseLeave: () => void;
}

function PlaceCard(props: OfferProps): JSX.Element {
  const {offer, onMouseOver, onMouseLeave} = props;

  const navigate = useNavigate();

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const dispatch = useAppDispatch();

  const [isFavorite, changeFavoriteStatus] = useState(offer.isFavorite);

  const isLogin: boolean = authorizationStatus === AuthorizationStatus.Auth;

  const buttonClassName = classNames({
    'button': true,
    'place-card__bookmark-button': true,
    'place-card__bookmark-button--active': offer.isFavorite,
  });

  const handleFavoriteButtonClick = async (id: number) => {
    if (isLogin) {
      await dispatch(fetchFavoriteStatusAction({id, favoriteStatus: offer.isFavorite}));
      await dispatch(fetchFavoriteOffersAction());
      changeFavoriteStatus(!isFavorite);
    }  else {
      return navigate(APIRoute.Login);
    }
  };

  return (
    <article className="cities__place-card place-card"
      onMouseOver={() => onMouseOver(offer.id)}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
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
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
