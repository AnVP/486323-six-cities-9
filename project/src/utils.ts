import {Offer, Review} from './types/offers';
import {sortType, CommentsLength} from './const';

const sortPriceToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortPriceToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortRating = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const sortOffers = (type: string, offers: Offer[]) => {
  const newOffers = [...offers];
  switch (type) {
    case sortType.PRICE_TO_LOW: {
      return newOffers.sort(sortPriceToLow);
    }
    case sortType.PRICE_TO_HIGH: {
      return newOffers.sort(sortPriceToHigh);
    }
    case sortType.TOP_RATED: {
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

const sortCommentsToDate = (commentA: Review, commentB: Review) => new Date(commentB.date).getTime() - new Date(commentA.date).getTime();

export const sortComments = (comments: Review[]) => comments.slice().sort(sortCommentsToDate).slice(CommentsLength.Min, CommentsLength.Max);

