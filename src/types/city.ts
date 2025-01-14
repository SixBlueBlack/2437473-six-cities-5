import { CityName } from '../consts/consts.ts';
import { Location } from './location';

export type City = {
  name: CityName;
  location: Location;
};
