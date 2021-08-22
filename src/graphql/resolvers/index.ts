import { merge } from 'lodash';
import { listingResolver } from './Listing';

export const resolvers = merge(listingResolver);
