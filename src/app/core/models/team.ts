import {Player} from './user';

export interface Team {
  team: string;
  players: Player[];
  keeper: number;
  defender: number;
  middle: number;
  forward: number;
}
