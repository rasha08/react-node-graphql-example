import { ApolloContextProvider } from './apollo';
import { SocialItemsContextProvider } from './social-items';

import { combineComponents } from '../shared/utils';

export const AppContextProvider = combineComponents(ApolloContextProvider, SocialItemsContextProvider);
