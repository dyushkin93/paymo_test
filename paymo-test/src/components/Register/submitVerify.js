import CONSTANTS from '../../constants';

export default function submitVerify() {
  const URL = `${CONSTANTS.URL.VERIFY}${this.registrationId}`;

  const body = {
    otp: +this.verificationCode.value,
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  this.$store.dispatch('SET_USER', { URL, config });
}
