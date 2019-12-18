const resolvers = {
  Query: {
    getEntities: (_, { sortBy, limit, page, filter }, context) => {
      return context.database.find(sortBy, limit, page, filter);
    },
  },
  Status: {
    OPEN: 1,
    CLOSED: 0,
  },
};

module.exports = {
  resolvers,
};
