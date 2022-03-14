import {Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OfferProps = {
  offers: Offers;
  handleCardHover: (id: number) => void;
}

function OfferList(props: OfferProps): JSX.Element {
  const {offers, handleCardHover} = props;
  const handleItemHover = (id: number) => handleCardHover(id);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            handleMouseOver={handleItemHover}
          />))
      }
    </div>
  );
}

export default OfferList;
