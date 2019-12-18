import React, { memo } from 'react';

import { SocialEntity } from '../../shared/models';
import { Status } from '../../shared/enums';

import './styles.scss';

interface Props {
  item: SocialEntity;
}

enum ItemState {
  Trending = 'Trending',
  Open = 'Task Open',
  Closed = 'Task Complete',
}

export const Card = memo(
  ({ item }: Props): JSX.Element => {
    const getItemStatus = (gstCssClass = false): string => {
      if (item.isTrending) {
        return gstCssClass ? ItemState.Trending.toLowerCase() : ItemState.Trending;
      }

      if (item.status === Status.OPEN) {
        return gstCssClass ? ItemState.Open.toLowerCase().replace(' ', '-') : ItemState.Open;
      }

      return gstCssClass ? ItemState.Closed.toLowerCase().replace(' ', '-') : ItemState.Closed;
    };

    return (
      <div className={'card'}>
        <div className={'card__header'}>
          <div className={'card__header--author'}>
            <img className={'card__header--author--image'} src={item.author.picture} alt={item.author.name} />
            <h5 className={'card__header--author--name'}>{item.author.name}</h5>
          </div>
          <div className={`card__header--status ${getItemStatus(true)}`}>{getItemStatus()}</div>
        </div>

        <div className={'card__body'}>
          <h2 className={'card__body--title'}>{item.title}</h2>
          <p className={'card__body--description'}>{item.description}</p>

          <div className={'card__body--submission'}>
            <div className={'card__body--submission--info'}>
              <img className={'card__body--submission--info--image'} src={item.thumbnail} alt={item.title} />
              <div className={'card__body--submission--info--pledge'}>
                <p className={'card__body--submission--info--pledge--total'}>${item.pledgeTotal}</p>
                <p className={'card__body--submission--info--pledge--goal'}>pledged of ${item.pledgeGoal} goal</p>
                <p className={'card__body--submission--info--pledge--count'}>{item.pledgerCount}</p>
                <p className={'card__body--submission--info--pledge--pledgers'}>pledgers</p>
              </div>
              <button className={'card__body--submission--info--action'}>Pledge</button>
            </div>
            <div className={'card__body--submission--footer'}>
              <div className={'card__body--submission--footer--link'}>View Source</div>
              <div className={'card__body--submission--footer--submissions'}>
                {'</>'} Code Submissions ({item.codeSubmissionTotal})
              </div>
              <div className={'card__body--submission--footer--claim'}>Claim ${item.pledgeTotal}</div>
            </div>
          </div>
        </div>
        <div className={'card__footer'}>
          <div className={'card__footer--comments'}>Comments({item.numComments})</div>
          <div className={'card__footer--share'}>Share</div>
          <div className={'card__footer--menu-trigger'}>...</div>
        </div>
      </div>
    );
  },
  () => true
);
