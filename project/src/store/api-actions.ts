import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from './index';
import {Offers, Offer, Review, ReviewPost, FavoriteStatusPost} from '../types/offers';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute, TIMEOUT_SHOW_ERROR} from '../const';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {redirectToRoute} from './action';
import {setError, setOffers, setFavoriteOffers, setOffersNear, loadComments, changeFavoriteStatusOffers} from './offer-data/offer-data';
import {setActiveOffer} from './offer-process/offer-process';
import {requireAuthorization} from './user-process/user-process';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(setOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchActiveOfferAction = createAsyncThunk(
  'data/fetchActiveOffer',
  async (id: number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
      store.dispatch(setActiveOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteOffersAction = createAsyncThunk(
  'data/fetchFavoriteOffers',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Favorites);
      store.dispatch(setFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearOffersAction = createAsyncThunk(
  'data/fetchNearOffers',
  async (id: number) => {
    try {
      if (!id) {
        return;
      }

      const {data} = await api.get<Offers>(`${APIRoute.Offers}/${id}${APIRoute.Nearby}`);
      store.dispatch(setOffersNear(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'data/fetchComments',
  async (id: number) => {
    try {
      if (!id) {
        return;
      }

      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchAddCommentAction = createAsyncThunk(
  'data/fetchAddComment',
  async ({id, comment, rating}: ReviewPost) => {
    try {
      const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
      store.dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteStatusAction = createAsyncThunk(
  'data/fetchFavoriteStatus',
  async ({id, favoriteStatus}: FavoriteStatusPost) => {
    try {
      const status: number = favoriteStatus ? 0 : 1;
      const {data} = await api.post<Offer>(`${APIRoute.Favorites}/${id}/${status}`);
      store.dispatch(changeFavoriteStatusOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoute.Root));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);
