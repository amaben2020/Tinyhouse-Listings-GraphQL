import { Collection } from 'mongodb';
import { ObjectId } from 'mongodb';
export interface Listing {
  _id: ObjectId;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  rating: number;
  numOfBaths: number;
}

export interface Database {
  listings: Collection<Listing>;
}
