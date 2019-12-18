import { reduceRight } from 'ramda';
import React, { ComponentProps, FC } from 'react';

export const combineComponents = (...components: FC<any>[]): FC => {
  return reduceRight(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: ComponentProps<FC>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>,
    components
  );
};
