import { Filter } from '../../shared/enums';
import { SocialEntity } from '../../shared/models';

export const SET_ITEMS = 'SET_ITEMS';
export const SET_CURRENT_FILTER = 'SET_CURRENT_FILTER';
export const SET_CURRENT_PAGE_ACTION = 'SET_CURRENT_PAGE_ACTION';
export const SET_HAS_MORE = 'SET_HAS_MORE';

export interface SocialItemsState {
  items: SocialEntity[];
  filter: Filter;
  currentPage: number;
  hasMore: boolean;
}

export interface SetCurrentFilterAction {
  type: typeof SET_CURRENT_FILTER;
  payload: Filter;
}

export interface SetCurrentPageAction {
  type: typeof SET_CURRENT_PAGE_ACTION;
  payload: number;
}

export interface SetItemsAction {
  type: typeof SET_ITEMS;
  payload: SocialEntity[];
}

export interface SetHasMoreAction {
  type: typeof SET_HAS_MORE;
  payload: boolean;
}
