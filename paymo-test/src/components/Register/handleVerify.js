import * as Validators from '../../middleware/validators';

export default function handleVerify(event) {
  const { value } = event.target;

  if (Validators.verifyCode(value)) {
    this.verificationCode.value = value;
  } else {
    this.verificationCode = { value: this.verificationCode.value };
  }

  if (this.verificationCode.value.length === 6) {
    this.submitVerify();
  }
}
