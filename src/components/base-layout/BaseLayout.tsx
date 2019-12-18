import React, { ComponentProps, FC } from 'react';

import './styles.scss';

export const BaseLayout = ({ children }: ComponentProps<FC>): JSX.Element => {
  return (
    <div className={'base-layout'}>
      <div className={'base-layout__container'}>{children}</div>
    </div>
  );
};
