import {Offers} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OfferProps = {
  offers: Offers;
  onCardHover?: (id: number | null) => void;
}

function OfferList(props: OfferProps): JSX.Element {
  const {offers, onCardHover} = props;

  return (
    <>
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            onMouseOver={onCardHover}
            onMouseLeave={() => onCardHover? onCardHover(null) : undefined}
          />))
      }
    </>
  );
}

export default OfferList;
