import {createAction} from '@reduxjs/toolkit';
import {Offers, Review} from '../types/offers';

export const changeCity = createAction<string>('changeCity');

export const setOffers = createAction<Offers>('setOffers');

export const setFavoriteOffers = createAction<Offers>('setFavoriteOffers');

export const setOffersNear = createAction<Offers>('setOffersNear');

export const changeComments = createAction<Review[]>('changeComments');
