export type Offer = {
  id: number,
  name: string,
  image: string[],
  price: number,
  type: string,
  bedrooms: number,
  adult: number,
  isPremium: boolean,
  isBookMark: boolean,
  isFavorite: boolean,
  rating: number,
  inside: string[],
  host: Host,
  city: {
    name: string,
  }
}

export type Host = {
  id: number,
  name: string,
  avatar: string,
  text: string,
  isPro: boolean
}

export type Review = {
  id: number,
  name: string,
  avatar: string,
  text: string,
  rating: number,
  time: string
}

export type Offers = Offer[];
