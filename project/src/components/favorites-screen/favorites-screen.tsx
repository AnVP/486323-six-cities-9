import Header from '../header/header';
import Footer from '../footer/footer';
import FavoritesCard from '../favorites-card/favorites-card';
import FavoritesEmptyScreen from '../favorites-empty-screen/favorites-empty-screen';
import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFavoriteOffersAction} from '../../store/api-actions';

function FavoritesScreen(): JSX.Element  {
  useEffect(() => {
    store.dispatch(fetchFavoriteOffersAction());
  });

  const {favoriteOffers} = useAppSelector(({DATA}) => DATA);

  const locationList = new Set(favoriteOffers.map((item) => item.city.name));

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

        {
          favoriteOffers.length ?

            <main className="page__main page__main--favorites">
              <div className="page__favorites-container container">
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {
                      [...locationList].map((location, index) => {
                        const keyValue = location + index;

                        return (
                          <li key={keyValue} className="favorites__locations-items">
                            <div className="favorites__locations locations locations--current">
                              <div className="locations__item">
                                <a href={`/#${location}`} className="locations__item-link">
                                  <span>{location}</span>
                                </a>
                              </div>
                            </div>
                            <div className="favorites__places">
                              {
                                favoriteOffers.filter((offer) => offer.city.name === location).map(
                                  (offer) => <FavoritesCard offer={offer} key={offer.id} />)
                              }
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </section>
              </div>
            </main>

            : <FavoritesEmptyScreen />
        }

        <Footer />
      </div>
    </>
  );
}

export default FavoritesScreen;
