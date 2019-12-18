import {
  SetCurrentFilterAction,
  SetCurrentPageAction,
  SetHasMoreAction,
  SetItemsAction,
  SocialItemsState,
} from './types';
import { Filter } from '../../shared/enums';

export const initialSocialItemsState: SocialItemsState = {
  items: [],
  filter: Filter.ALL,
  currentPage: 0,
  hasMore: true,
};

export const socialItemsReducer = (
  state: SocialItemsState = initialSocialItemsState,
  action: SetItemsAction | SetCurrentFilterAction | SetCurrentPageAction | SetHasMoreAction
): SocialItemsState => {
  switch (action.type) {
    case 'SET_CURRENT_FILTER':
      return {
        ...state,
        ...{
          filter: action.payload,
          items: [],
          hasMore: true,
          currentPage: 0,
        },
      };
    case 'SET_CURRENT_PAGE_ACTION':
      return {
        ...state,
        ...{
          currentPage: action.payload,
        },
      };
    case 'SET_ITEMS':
      return {
        ...state,
        ...{
          items: [...state.items, ...action.payload],
        },
      };
    case 'SET_HAS_MORE':
      return {
        ...state,
        ...{ hasMore: action.payload },
      };
    default:
      return state;
  }
};
