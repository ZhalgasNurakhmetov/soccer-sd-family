import {adminContentComponents} from './admin-content';
import {coachContentComponents} from './coach-content';
import {playerContentComponents} from './player-content';
import {adminChangePasswordComponents} from './change-password';

export const adminTabComponents = [
  ...adminContentComponents,
  ...coachContentComponents,
  ...playerContentComponents,
  ...adminChangePasswordComponents
]
