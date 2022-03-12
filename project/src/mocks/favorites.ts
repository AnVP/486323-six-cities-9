import {Offer} from '../types/offers';

export const favoriteOffers: Offer[] = [
  {
    id: 1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    images: ['img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg'],
    previewImage: 'img/room.jpg',
    price: 80,
    type: 'Premium',
    bedrooms: 3,
    maxAdults: 3,
    isPremium: true,
    isFavorite: true,
    rating: 4,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', ' Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 777,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  {
    id: 2,
    title: 'Wood and stone place',
    images: ['img/apartment-03.jpg', 'img/room.jpg'],
    previewImage: 'img/apartment-03.jpg',
    price: 80,
    type: 'Private room',
    bedrooms: 1,
    maxAdults: 1,
    isPremium: false,
    isFavorite: true,
    rating: 4,
    goods: ['Towels', 'Heating', 'Coffee machine', 'Baby seat'],
    host: {
      id: 777,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  {
    id: 3,
    title: 'Canal View Prinsengracht',
    images: ['img/apartment-02.jpg', 'img/apartment-03.jpg'],
    previewImage: 'img/apartment-02.jpg',
    price: 132,
    type: 'Apartment',
    bedrooms: 2,
    maxAdults: 4,
    isPremium: true,
    isFavorite: true,
    rating: 4,
    goods: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', ' Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 778,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    images: ['img/room.jpg'],
    previewImage: 'img/room.jpg',
    price: 140,
    type: 'Apartment',
    bedrooms: 4,
    maxAdults: 4,
    isPremium: false,
    isFavorite: true,
    rating: 4,
    goods: ['Wi-Fi', 'Washing machine', 'Towels'],
    host: {
      id: 7777,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
  },
];
