export type Offer = {
  bedrooms: number,
  city: {
    location: Location,
    name: string,
  },
  description: string,
  goods: string[],
  host: User,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export type User = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
}

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: User,
}

export type ReviewPost = {
  comment: string,
  id: number | undefined,
  rating: number,
}

export type FavoriteStatusPost = {
  id: number,
  favoriteStatus: boolean,
}

export type Location = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type Offers = Offer[];
