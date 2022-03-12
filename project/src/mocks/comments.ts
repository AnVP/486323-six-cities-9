import {Review} from '../types/offers';

export const comments: Review[] = [
  {
    id: 1,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 44,
      isPro: true,
      name: 'Max',
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 5,
    date: '2019-04-24',
  },
  {
    id: 2,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 44,
      isPro: true,
      name: 'Angelina',
    },
    comment: 'A quiet cozy and picturesque that hides behind.',
    rating: 4,
    date: '2019-04-22',
  },
];
