import React, { ComponentProps, createContext, FC, useContext, useEffect, useReducer } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { initialSocialItemsState, socialItemsReducer } from './reducer';
import { setCurrentFilterAction, setCurrentPageAction, setHasMoreAction, setItemsAction } from './actions';
import { SocialItemsState } from './types';

import { Filter } from '../../shared/enums';
import { mapFilterToQuery } from '../../shared/utils';
import { GetEntitiesResponse } from '../../shared/models';
import { GetSocialEntities } from '../../shared/queries';

interface SocialItemsContext {
  state: SocialItemsState;
  setCurrentPage: (page: number) => void;
  setCurrentFilter: (filter: Filter) => void;
}

const SocialItemsContext = createContext({} as SocialItemsContext);

export const useSocialItemsContext = () => useContext(SocialItemsContext);
export const SocialItemsContextProvider = ({ children }: ComponentProps<FC>): JSX.Element => {
  const [state, dispatch] = useReducer(socialItemsReducer, initialSocialItemsState);
  const { loading, refetch } = useQuery<GetEntitiesResponse>(GetSocialEntities, {
    variables: {
      page: state.currentPage,
      filter: mapFilterToQuery(state.filter),
    },
  });

  const setCurrentPage = (page: number): void => {
    if (loading || !state.hasMore || page === state.currentPage) {
      return;
    }
    setCurrentPageAction(page, dispatch);
  };

  const setCurrentFilter = (filter: Filter): void => {
    if (filter === state.filter) {
      return;
    }

    setCurrentFilterAction(filter, dispatch);
  };

  const getSocialEntities = (): void => {
    refetch({
      page: state.currentPage,
      filter: mapFilterToQuery(state.filter),
    }).then(({ data }) => {
      setItemsAction(data.getEntities.result, dispatch);
      setHasMoreAction(data.getEntities.hasMore, dispatch);
    });
  };

  /* eslint-disable */
  useEffect(() => {
    getSocialEntities();
  }, [state.filter, state.currentPage]);
  /* eslint-enable */

  return (
    <SocialItemsContext.Provider value={{ state, setCurrentPage, setCurrentFilter }}>
      {children}
    </SocialItemsContext.Provider>
  );
};
