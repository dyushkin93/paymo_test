import CONSTANTS from '../../constants';
import router from '../../router';

export default function handleSubmit(event) {
  event.preventDefault();
  const URL = CONSTANTS.URL.REGISTER;

  const body = {
    fullName: this.fullName.value,
    nickname: this.nickname.value,
    password: this.password.value,
    repeatPassword: this.repeatPassword.value,
    phone: this.phone.value.split(' ').join(''),
    gender: this.gender.toUpperCase(),
    country: this.country.toUpperCase(),
    city: this.city.toUpperCase(),
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  fetch(URL, config)
    .then((res) => res.json())
    .then((data) => {
      this.registrationId = data.registrationId;
    })
    .catch(() => {
      router.push('/error');
    });
}
