import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {Offer, Offers, Review} from './offers';

export type  UserProcess = {
  authorizationStatus: AuthorizationStatus,
}

export type OfferData = {
  offers: Offers,
  comments: Review[],
  favoriteOffers: Offers,
  offersNear: Offers,
  isDataLoaded: boolean,
  error: string,
};

export type OfferProcess = {
  city: string,
  offer: Offer | null,
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
