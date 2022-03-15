export const URL_MARKER_DEFAULT = 'img/pin.svg';
export const URL_MARKER_ACTIVE = 'img/pin-active.svg';
export const MARKER_SIZE_X = 29;
export const MARKER_SIZE_Y = 39;
export const MARKER_ANCHOR_X = 20;
export const MARKER_ANCHOR_Y = 40;

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
