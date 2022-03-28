import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, setFavoriteOffers, loadComments, setOffersNear, requireAuthorization, setError, setActiveOffer} from './action';
import {comments} from '../mocks/comments';
import {favoriteOffers} from '../mocks/favorites';
import {offersNear} from '../mocks/offers-near';
import {cities, AuthorizationStatus} from '../const';
import {Offers, Review, Offer} from '../types/offers';

type InitialState = {
  city: string,
  offers: Offers,
  comments: Review[],
  favoriteOffers: Offers,
  offersNear: Offers,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  error: string,
  offer: Offer | null,
}

const initialState: InitialState = {
  city: cities[0],
  offers: [],
  comments,
  favoriteOffers,
  offersNear,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  error: '',
  offer: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOffersNear, (state, action) => {
      state.offersNear = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
