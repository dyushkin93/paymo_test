/* eslint-disable operator-linebreak */
// https://github.com/prettier/prettier/issues/3806 due to this issue
import * as Validators from './validators';

export const handleChange = (event) => {
  let { value } = event.target;
  const fieldID = event.target.id;

  if (this[fieldID].showHint !== undefined) {
    this[fieldID].showHint = false;
  }

  switch (fieldID) {
    case 'fullName':
      this.fullName.isValid = value.length > 0;
      break;

    case 'phone':
      value = Validators.phoneFormat(value);
      this.phone = value ? { number: value } : { number: this.phone.number };
      this.phone.isValid = value.length === 13;
      break;

    case 'nickname':
      this.nickname.isValid = Validators.nickname(value);
      break;

    case 'password':
      this.password.isValid = Validators.password(value);
      this.passwordRepeat.isValid = this.password.value === this.passwordRepeat.value;
      break;
    case 'passwordRepeat':
      this.passwordRepeat.isValid = this.password.value === event.target.value;
      break;

    default:
      break;
  }

  this.isFormValid = this.passwordRepeat.isValid
      && this.password.isValid
      && this.nickname.isValid
      && this.fullName.isValid
      && this.phone.isValid;
};

export const handleBlur = (event) => {
  const data = this[event.target.id];
  if (data.showHint !== undefined) {
    data.showHint = !data.isValid;
    if (event.target.id === 'password') {
      this.passwordRepeat.showHint = !this.passwordRepeat.isValid;
    }
  }
};
