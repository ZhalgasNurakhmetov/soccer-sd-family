export interface ResetPasswordFormModel {
  email: string;
}

export interface ResetPasswordForm extends ResetPasswordFormModel{
  newPassword: string;
  newPasswordConfirm: string;
}

export interface ResetPasswordCode {
  code: string;
}
