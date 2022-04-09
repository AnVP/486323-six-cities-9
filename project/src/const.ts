import {Sort} from './types/sort';

export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_ACTIVE = 'img/pin-active.svg';
export const MARKER_SIZE_X = 29;
export const MARKER_SIZE_Y = 39;
export const MARKER_ANCHOR_X = 20;
export const MARKER_ANCHOR_Y = 40;

export const TIMEOUT_SHOW_ERROR = 2000;

export const MIN_COMMENTS_LENGTH = 50;

export enum HTTPCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum AppRoute {
  Login = '/login',
  Root = '/',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers= '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  Nearby = '/nearby',
  Comments = '/comments',
}

export enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
}

export enum CommentsLength {
  Min = 0,
  Max = 10,
}

export const ratingList: {id: string, title: string}[] = [
  {
    id: '5-stars',
    title: 'perfect',
  },
  {
    id: '4-stars',
    title: 'good',
  },
  {
    id: '3-stars',
    title: 'not bad',
  },
  {
    id: '2-stars',
    title: 'badly',
  },
  {
    id: '1-stars',
    title: 'terribly',
  },
];

export const cities = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const sortType = {
  DEFAULT: 'default',
  PRICE_TO_HIGH: 'price-to-high',
  PRICE_TO_LOW: 'price-to-low',
  TOP_RATED: 'top-rated',
};

export const sortList: Sort[] = [
  {
    type: sortType.DEFAULT,
    name: 'Popular',
  },
  {
    type: sortType.PRICE_TO_HIGH,
    name: 'Price: low to high',
  },
  {
    type: sortType.PRICE_TO_LOW,
    name: 'Price: high to low',
  },
  {
    type: sortType.TOP_RATED,
    name: 'Top rated first',
  },
];
