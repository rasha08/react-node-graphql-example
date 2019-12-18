import { Author } from './Author';
import { Status } from '../enums';

export type SocialEntity = {
  author: Author;
  date: string;
  popularity: number;
  isTrending: boolean;
  title: string;
  description: string;
  numComments: string;
  thumbnail: string;
  codeSubmissionTotal: number;
  pledgeTotal: number;
  pledgerCount: number;
  pledgeGoal: number;
  status: Status;
};
