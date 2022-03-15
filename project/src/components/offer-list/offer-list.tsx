import {Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OfferProps = {
  offers: Offers;
  onCardHover: (id: number) => void;
}

function OfferList(props: OfferProps): JSX.Element {
  const {offers, onCardHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            onMouseOver={onCardHover}
          />))
      }
    </div>
  );
}

export default OfferList;
