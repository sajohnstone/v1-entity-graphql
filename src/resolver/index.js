import { GraphQLDateTime } from 'graphql-iso-date';
import { GraphQLJSON } from 'graphql-type-json';

import userResolvers from './user';

const customScalarResolver = {
  Date: GraphQLDateTime,
  JSON: GraphQLJSON,
};

export default [
  customScalarResolver,
  userResolvers,
];