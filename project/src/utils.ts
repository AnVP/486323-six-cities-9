import {Offer} from './types/offers';
import {SortType} from './const';

const sortPriceToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortPriceToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const sortOffers = (type: string, offers: Offer[]) => {
  const newOffers = [...offers];
  switch (type) {
    case SortType.PRICE_TO_LOW: {
      return newOffers.sort(sortPriceToLow);
    }
    case SortType.PRICE_TO_HIGH: {
      return newOffers.sort(sortPriceToHigh);
    }
    case SortType.TOP_RATED: {
      return newOffers.sort(sortRating);
    }
    default: {
      return newOffers;
    }
  }
};

export const dateFormatted = (date: string) => new Date(date).toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
});
