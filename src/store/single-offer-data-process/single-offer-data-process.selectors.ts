import { StoreNameSpace } from '../../consts/consts.ts';
import { Offer } from '../../types/offer';
import { ReviewFromPerson } from '../../types/review-data';
import { OfferData } from '../../types/offer-data.ts';
import { State } from '../../types/state';

export const getSingleOffer = (state: State): OfferData | null =>
  state[StoreNameSpace.SingleOffer].singleOffer;
export const getNearbyOffers = (state: State): Offer[] =>
  state[StoreNameSpace.SingleOffer].nearbyOffers;
export const getReviews = (state: State): ReviewFromPerson[] =>
  state[StoreNameSpace.SingleOffer].reviews;
export const getSingleOfferDataLoadingStatus = (state: State): boolean =>
  state[StoreNameSpace.SingleOffer].isSingleOfferDataLoading;
export const getSingleOfferFormAcceptedStatus = (state: State): boolean =>
  state[StoreNameSpace.SingleOffer].isFormAccepted;
export const getSingleOfferReviewPostingStatus = (state: State): boolean =>
  state[StoreNameSpace.SingleOffer].isReviewPosting;
