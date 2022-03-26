import {createAction} from '@reduxjs/toolkit';
import {Offers, Review, Offer} from '../types/offers';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeCity = createAction<string>('changeCity');

export const setOffers = createAction<Offers>('setOffers');

export const setActiveOffer = createAction<Offer>('setActiveOffer');

export const setFavoriteOffers = createAction<Offers>('setFavoriteOffers');

export const setOffersNear = createAction<Offers>('setOffersNear');

export const loadComments = createAction<Review[]>('loadComments');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('setError');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
