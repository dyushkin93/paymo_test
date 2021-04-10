import CONSTANTS from '../../constants';

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
    .then((res) => {
      let data;
      if (res.status >= 200 && res.status < 300) {
        data = res.json();
      } else {
        throw new Error('Error on the server side');
      }
      return data;
    })
    .then((data) => {
      this.registrationId = data.registrationId;
    })
    .catch((error) => {
      console.log(error);
    });
}
