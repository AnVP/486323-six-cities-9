import {createSlice} from '@reduxjs/toolkit';
import {cities, NameSpace} from '../../const';
import {OfferProcess} from '../../types/state';

const initialState: OfferProcess = {
  city: cities[0],
  offer: null,
};

export const offerProcess = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    setActiveOffer: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export const {changeCity, setActiveOffer} = offerProcess.actions;
