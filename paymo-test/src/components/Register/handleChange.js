import * as Validators from '../../middleware/validators';

export default function handleChange(event) {
  let { value } = event.target;
  const fieldID = event.target.id;

  if (this[fieldID].showHint !== undefined) {
    this[fieldID].showHint = false;
  }

  switch (fieldID) {
    case 'fullName':
      this.fullName.isValid = value.length > 0;
      break;

    case 'phone': {
      value = Validators.phoneFormat(value);
      const phone = { ...this.phone };
      this.phone = value ? Object.assign(phone, { value }) : phone;
      this.phone.isValid = this.phone.value.length === 13;
      break;
    }
    case 'nickname':
      this.nickname.isValid = Validators.nickname(value);
      break;

    case 'password':
      this.password.isValid = Validators.password(value);
      this.repeatPassword.isValid = this.password.value === this.repeatPassword.value;
      break;
    case 'repeatPassword':
      this.repeatPassword.isValid = this.password.value === event.target.value;
      break;

    default:
      break;
  }
}
