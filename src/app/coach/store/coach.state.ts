import {CoachStateModel} from './coach.state.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {User} from '../../core/models/user';
import {ResetState, SetCoach} from './coach.action';

const defaultCoachState = (): CoachStateModel => {
  return {
    coach: null
  }
}

@State<CoachStateModel>({
  name: 'coach',
  defaults: defaultCoachState()
})
@Injectable()
export class CoachState {

  @Selector()
  static coach(state: CoachStateModel): User {
    return state.coach;
  }

  @Action(SetCoach)
  setCoach({patchState}: StateContext<CoachStateModel>, {coach}: SetCoach) {
    patchState({
      coach
    });
  }

  @Action(ResetState)
  resetState({setState}: StateContext<CoachStateModel>) {
    setState(defaultCoachState());
  }
}
