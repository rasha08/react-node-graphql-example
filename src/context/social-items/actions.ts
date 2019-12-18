import {
  SET_CURRENT_FILTER,
  SET_CURRENT_PAGE_ACTION,
  SET_HAS_MORE,
  SET_ITEMS,
  SetCurrentFilterAction,
  SetCurrentPageAction,
  SetHasMoreAction,
  SetItemsAction,
} from './types';
import {SocialEntity} from '../../shared/models';
import {Filter} from '../../shared/enums';

export const setCurrentFilterAction = (filter: Filter, dispatch: (action: SetCurrentFilterAction) => void): void => {
  dispatch({ type: SET_CURRENT_FILTER, payload: filter });
};

export const setCurrentPageAction = (currentPage: number, dispatch: (action: SetCurrentPageAction) => void): void => {
  dispatch({ type: SET_CURRENT_PAGE_ACTION, payload: currentPage });
};

export const setItemsAction = (items: SocialEntity[], dispatch: (action: SetItemsAction) => void): void => {
  dispatch({ type: SET_ITEMS, payload: items });
};

export const setHasMoreAction = (hasMore: boolean, dispatch: (action: SetHasMoreAction) => void): void => {
  dispatch({ type: SET_HAS_MORE, payload: hasMore });
};
