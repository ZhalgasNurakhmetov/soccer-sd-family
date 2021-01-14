import {StartRoutes} from './start/start.routes';
import {AdminRoutes} from './admin/admin.routes';
import {CoachRoutes} from './coach/coach.routes';

export const AppRoutes = {
  start: StartRoutes.feature,
  admin: AdminRoutes.feature,
  coach: CoachRoutes.feature,
};
