import React, { memo } from 'react';
import { map } from 'ramda';

import { useSocialItemsContext } from '../../context/social-items';

import { itemsFilters } from '../../shared/constants';
import { Filter } from '../../shared/enums';

import './styles.scss';

export const Filters = memo(
  (): JSX.Element => {
    const {
      state: { filter },
      setCurrentFilter,
    } = useSocialItemsContext();

    const onFilterChange = (filter: Filter): (() => void) => (): void => setCurrentFilter(filter);

    return (
      <div className={'filters'}>
        {map(
          f => (
            <div
              key={f.filter}
              onClick={onFilterChange(f.filter)}
              className={`filters__label ${f.filter === filter ? 'filters__label__active' : ''}`}
            >
              {f.label}
            </div>
          ),
          itemsFilters
        )}
      </div>
    );
  },
  () => true
);
