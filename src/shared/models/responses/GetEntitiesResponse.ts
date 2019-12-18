import { SocialEntity } from '../SocialItem';

export type GetEntitiesResponse = {
  getEntities: {
    result: SocialEntity[];
    hasMore: boolean;
  };
};
