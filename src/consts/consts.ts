import { City } from '../types/city.ts';

export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export const RatingDescriptionsList = [
  'terribly',
  'badly',
  'not bad',
  'good',
  'perfect',
];

export enum APIRoutes {
  Login = '/login',
  Logout = '/logout',
  Offers = '/offers',
  Favorites = '/favorite',
  Comments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Amsterdam = 'Amsterdam',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const RoomTypes = {
  ['apartment']: 'Apartment',
  ['room']: 'Room',
  ['house']: 'House',
  ['hotel']: 'Hotel',
};

export const CityInfoList: City[] = [
  {
    name: CityName.Paris,
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 12,
    },
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 12,
    },
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 12,
    },
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.374,
      longitude: 4.889969,
      zoom: 12,
    },
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12,
    },
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 12,
    },
  },
];

export const CityData = {
  [CityName.Paris]: {
    name: CityName.Paris,
    location: {
      latitude: 48.8534,
      longitude: 2.3488,
      zoom: 12,
    },
  },
  [CityName.Cologne]: {
    name: CityName.Cologne,
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 12,
    },
  },
  [CityName.Brussels]: {
    name: CityName.Brussels,
    location: {
      latitude: 50.8504,
      longitude: 4.34878,
      zoom: 12,
    },
  },
  [CityName.Amsterdam]: {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.374,
      longitude: 4.889969,
      zoom: 12,
    },
  },
  [CityName.Hamburg]: {
    name: CityName.Hamburg,
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12,
    },
  },
  [CityName.Dusseldorf]: {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.2217,
      longitude: 6.77616,
      zoom: 12,
    },
  },
};

export enum StoreNameSpace {
  Data = 'DATA',
  User = 'USER',
  SingleOffer = 'SINGLE_OFFER',
}

export enum CardType {
  Cities = 'cities__card',
  Favorites = 'favorites__card',
  Nearby = 'near-places__card',
}

export enum SortingOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const SortingOptionsList = [
  SortingOption.Popular,
  SortingOption.PriceHighToLow,
  SortingOption.PriceLowToHigh,
  SortingOption.TopRatedFirst,
];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
