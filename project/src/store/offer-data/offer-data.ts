import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OfferData} from '../../types/state';

const initialState: OfferData = {
  offers: [],
  comments: [],
  favoriteOffers: [],
  offersNear: [],
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
      state.offers[index] = action.payload;
      state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
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
