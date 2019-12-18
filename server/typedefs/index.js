const { gql } = require('apollo-server');
const typeDefs = gql`
  type Author {
    name: String
    picture: String
    title: String
    score: Float
  }

  enum Status {
    CLOSED
    OPEN
  }

  type SocialEntity {
    author: Author!
    date: String!
    popularity: Float!
    isTrending: Boolean!
    title: String!
    description: String!
    numComments: String!
    thumbnail: String!
    codeSubmissionTotal: Int!
    pledgeTotal: Float!
    pledgerCount: Float!
    pledgeGoal: Float!
    status: Status!
  }

  type GetEntitiesResult {
    result: [SocialEntity]
    hasMore: Boolean
  }

  input Filter {
    isTrending: Boolean
    status: Status
  }

  type Query {
    getEntities(sortBy: [String], limit: Int, page: Int, filter: Filter): GetEntitiesResult
  }
`;

module.exports = {
  typeDefs,
};
