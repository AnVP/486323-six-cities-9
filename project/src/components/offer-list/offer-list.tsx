import {useState} from 'react';
import {Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OfferProps = {
  offers: Offers;
}

function OfferList(props: OfferProps): JSX.Element {
  const {offers} = props;
  // eslint-disable-next-line
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            handleMouseOver={() => setActiveCard(offer.id)}
          />))
      }
    </div>
  );
}

export default OfferList;
