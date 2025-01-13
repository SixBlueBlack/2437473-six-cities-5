import { AuthorizationStatus, CityName } from '../consts/consts.ts';
import { store } from '../store';
import { Offer } from './offer';
import { ReviewFromPerson } from './review-data';
import { OfferData } from './offer-data.ts';
import { UserData } from './user-data.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
  isUserDataStillLoading: boolean;
  favoriteOffers: Offer[];
};
export type DataProcess = {
  cityName: CityName;
  offerList: Offer[];
  isOffersDataLoading: boolean;
};

export type SingleOfferProcess = {
  singleOffer: OfferData | null;
  nearbyOffers: Offer[];
  reviews: ReviewFromPerson[];
  isSingleOfferDataLoading: boolean;
  isReviewPosting: boolean;
  isFormAccepted: boolean;
};
