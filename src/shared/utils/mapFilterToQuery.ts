import { Filter } from '../enums';

export const mapFilterToQuery = (filter: Filter) => {
  switch (filter) {
    case Filter.IS_TRENDING:
      return { isTrending: true };
    case Filter.CLOSED_TASKS:
      return { status: 'CLOSED' };
    case Filter.OPEN_TASKS:
      return { status: 'OPEN' };
    default:
      return {};
  }
};
