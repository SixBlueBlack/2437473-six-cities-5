import { Person } from './person';
import { Offer } from './offer';

export type OfferData = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Person;
  images: string[];
  maxAdults: number;
};