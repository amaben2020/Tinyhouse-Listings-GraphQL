import { IResolvers } from 'apollo-server-express';
import { Database, Listing } from '../../../lib/type';
import { ObjectId } from 'mongodb';

export const listingResolver: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteRes.value) {
        throw new Error('failed to delete');
      }

      return deleteRes.value;
    },
  },
  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
  },
};
function listings(listings: any) {
  throw new Error('Function not implemented.');
}
