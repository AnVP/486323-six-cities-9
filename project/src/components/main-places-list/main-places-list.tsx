import Map from '../map/map';
import SortingPlaceContent from '../sorting-place-content/sorting-place-content';
import {Offer} from '../../types/offers';
import {useState} from 'react';

type MainPlacesListType = {
  filteredCityOffers: Offer[],
  cityCurrent: string,
}

function MainPlacesList({filteredCityOffers, cityCurrent}: MainPlacesListType): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const location = filteredCityOffers[0].city.location;
  const handleCardHover = (offerId: number | null) => setActiveCardId(offerId);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{filteredCityOffers.length} places to stay in {cityCurrent}</b>
        <SortingPlaceContent
          filteredCityOffers={filteredCityOffers}
          onCardHover={handleCardHover}
        />
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map offers={filteredCityOffers}
            point={location}
            selectedPoint={activeCardId}
          />
        </section>
      </div>
    </div>
  );
}

export default MainPlacesList;
