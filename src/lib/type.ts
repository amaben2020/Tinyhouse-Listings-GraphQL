import { Collection } from 'mongodb';

export interface Listing {
  _id: string;
  title: string;
  image: string;
  address: string;
  price: string;
  numOfGuests: number;
  numOfBeds: number;
  rating: number;
}

export interface Database {
  listings: Collection<Listing>;
}
