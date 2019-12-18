import { Filter } from '../enums';

interface ItemsFilter {
  label: string;
  filter: Filter;
}

export const itemsFilters: ItemsFilter[] = [
  {
    label: 'All',
    filter: Filter.ALL,
  },
  {
    label: 'Trending',
    filter: Filter.IS_TRENDING,
  },
  {
    label: 'Open Tasks',
    filter: Filter.OPEN_TASKS,
  },
  {
    label: 'Closed Tasks',
    filter: Filter.CLOSED_TASKS,
  },
];
