import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferData} from '../../types/state';
import {comments} from '../../mocks/comments';
import {favoriteOffers} from '../../mocks/favorites';
import {offersNear} from '../../mocks/offers-near';

const initialState: OfferData = {
  offers: [],
  comments,
  favoriteOffers,
  offersNear,
  isDataLoaded: false,
  error: '',
};

export const offerData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    setFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
      state.isDataLoaded = true;
    },
    changeFavoriteStatusOffers: (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [...state.offers.slice(0, index), action.payload, ...state.offers.slice(index + 1)];
    },
    setOffersNear: (state, action) => {
      state.offersNear = action.payload;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {setOffers, loadComments, setOffersNear, setFavoriteOffers, setError, changeFavoriteStatusOffers} = offerData.actions;
