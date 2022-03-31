import PlacesSorting from '../places-sorting/places-sorting';
import OfferList from '../offer-list/offer-list';
import {useState} from 'react';
import {Sort} from '../../types/sort';
import {sortList} from '../../const';
import {sortOffers} from '../../utils';
import {Offer} from '../../types/offers';

type SortingPlaceContentType = {
  filteredCityOffers: Offer[],
  onCardHover: (item: number | null) => void,
}

function SortingPlaceContent({onCardHover, filteredCityOffers}: SortingPlaceContentType): JSX.Element {
  const [sortType, setSortType] = useState<Sort>(sortList[0]);
  const sortedOffers = sortOffers(sortType.type, filteredCityOffers);
  return (
    <>
      <PlacesSorting sortType={sortType} setSortType={setSortType}/>
      <div className="cities__places-list places__list tabs__content">
        <OfferList offers={sortedOffers} onCardHover={onCardHover}/>
      </div>
    </>
  );
}

export default SortingPlaceContent;
