import {EditProfileStateModel} from './edit-profile.state.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {SetEditProfileIsLoading} from './edit-profile.action';

const defaultEditProfileState = (): EditProfileStateModel => {
  return {
    isLoading: false
  }
}

@State<EditProfileStateModel>({
  name: 'editProfile',
  defaults: defaultEditProfileState()
})
@Injectable()
export class EditProfileState {

  @Selector()
  static isLoading(state: EditProfileStateModel): boolean {
    return state.isLoading;
  }

  @Action(SetEditProfileIsLoading)
  setEditProfileIsLoading({patchState}: StateContext<EditProfileStateModel>, {isLoading}: SetEditProfileIsLoading) {
    patchState({
      isLoading
    });
  }
}
