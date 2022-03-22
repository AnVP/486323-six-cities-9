import {useState} from 'react';
import Header from '../header/header';
import Locations from '../locations/locations';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import MainEmptyScreen from '../main-empty-screen/main-empty-screen';
import PlacesSorting from '../places-sorting/places-sorting';
import {Offer} from '../../types/offers';
import {City} from '../../types/city';
import {Sort} from '../../types/sort';
import {sortList} from '../../const';
import {sortOffers} from '../../utils';

type MainScreenProps = {
  cards: Offer[];
  city: City;
}

function MainScreen({cards, city}: MainScreenProps): JSX.Element  {
  const filteredCityOffers = cards.filter((card) => card.city.name === city);
  let location;
  filteredCityOffers.length
    ? location = filteredCityOffers[0].city.location
    : location = cards[0].city.location;

  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardHover = (offerId: number | null) => setActiveCardId(offerId);

  const [sortType, setSortType] = useState<Sort>(sortList[0]);
  const sortedOffers = sortOffers(sortType.type, filteredCityOffers);

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
          </symbol>
        </svg>
      </div>

      <div className="page page--gray page--main">
        <Header />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <Locations city={city} />
          </div>
          <div className="cities">
            {filteredCityOffers.length ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredCityOffers.length} places to stay in {city}</b>
                  <PlacesSorting sortType={sortType} setSortType={setSortType}/>
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList offers={sortedOffers} onCardHover={handleCardHover}/>
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map offers={sortedOffers}
                      point={location}
                      selectedPoint={activeCardId}
                    />
                  </section>
                </div>
              </div>
              : <MainEmptyScreen/>}
          </div>
        </main>
      </div>
    </>
  );
}

export default MainScreen;
