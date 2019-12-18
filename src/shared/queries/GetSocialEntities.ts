import gql from 'graphql-tag';

export const GetSocialEntities = gql`
  query($sortBy: [String], $limit: Int, $page: Int, $filter: Filter) {
    getEntities(sortBy: $sortBy, limit: $limit, page: $page, filter: $filter) {
      result {
        author {
          name
          title
          picture
        }
        title
        description
        pledgeTotal
        pledgerCount
        pledgeGoal
        thumbnail
        numComments
        codeSubmissionTotal
        isTrending
        status
      }
      hasMore
    }
  }
`;
