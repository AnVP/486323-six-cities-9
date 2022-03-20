import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, setFavoriteOffers, changeComments, setOffersNear} from './action';
import {offers} from '../mocks/offers';
import {comments} from '../mocks/comments';
import {favoriteOffers} from '../mocks/favorites';
import {offersNear} from '../mocks/offers-near';
import {cities} from '../const';

const initialState = {
  city: cities[0],
  offers,
  comments,
  favoriteOffers,
  offersNear,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setOffersNear, (state, action) => {
      state.offersNear = action.payload;
    })
    .addCase(changeComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {reducer};
