<template>
  <div :class="$style.register">
    <h2>Registration</h2>
    <form
      :class="$style.registerForm"
      @input="handleChange"
      v-on:submit="handleSubmit"
    >
      <label :class="[$style.fullName, fullName.showHint ? $style.wrong : '']">
        <span :class="$style.labelText"> Full Name * </span>
        <input
          id="fullName"
          type="text"
          v-model="fullName.value"
          v-on:blur="handleBlur"
          required
        />
      </label>

      <label :class="[$style.nickname, nickname.showHint ? $style.wrong : '']">
        <span :class="$style.labelText">Nickname *</span>
        <input
          id="nickname"
          type="text"
          v-model="nickname.value"
          v-on:blur="handleBlur"
          required
        />
      </label>

      <label :class="[$style.password, password.showHint ? $style.wrong : '']">
        <span :class="$style.labelText">Password *</span>
        <input
          id="password"
          type="password"
          v-model="password.value"
          v-on:blur="handleBlur"
          required
        />
      </label>

      <label
        :class="[
          $style.repeatPassword,
          repeatPassword.showHint ? $style.wrong : '',
        ]"
      >
        <span :class="$style.labelText">Repeat Password *</span>
        <input
          id="repeatPassword"
          type="password"
          v-model="repeatPassword.value"
          v-on:blur="handleBlur"
          required
        />
      </label>

      <label :class="[$style.phone, phone.showHint ? $style.wrong : '']">
        <span :class="$style.labelText">Phone *</span>
        <input
          id="phone"
          type="text"
          :value="phone.value"
          v-on:blur="handleBlur"
          required
        />
      </label>

      <label :class="$style.country">
        <span :class="$style.labelText">Country</span>
        <input id="country" type="text" v-model="country" />
      </label>

      <label :class="$style.city">
        <span :class="$style.labelText">City</span>
        <input id="city" type="text" v-model="city" />
      </label>

      <select id="gender" :class="$style.gender" v-model="gender">
        <option value="none">Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
      </select>

      <p :class="$style.requiredFields">* - required fields</p>

      <input
        :class="[$style.submit, isFormValid ? $style.submitActive : '']"
        :disabled="!isFormValid"
        type="submit"
        value="continue"
      />
    </form>
  </div>
</template>

<script>
/* eslint-disable operator-linebreak */
// https://github.com/prettier/prettier/issues/3806 due to this issue
import * as Validators from '../middleware/validators';

export default {
  name: 'register',
  data() {
    return {
      fullName: {
        value: '',
        isValid: false,
        showHint: false,
      },
      nickname: {
        value: '',
        isValid: false,
        showHint: false,
      },
      password: {
        value: '',
        isValid: false,
        showHint: false,
      },
      repeatPassword: {
        value: '',
        isValid: false,
        showHint: false,
      },
      phone: {
        value: '998 ',
        isValid: false,
        showHint: false,
      },
      gender: 'none',
      country: '',
      city: '',
      verificationCode: '',
      registrationId: null,
    };
  },
  methods: {
    handleChange(event) {
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
          this.phone = value ? { value } : { value: this.phone.value };
          console.log('phone');
          this.phone.isValid = this.phone.value.length === 13;
          break;

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
    },

    handleBlur(event) {
      const data = this[event.target.id];
      if (data.showHint !== undefined) {
        data.showHint = !data.isValid;
        if (event.target.id === 'password') {
          this.repeatPassword.showHint = !this.repeatPassword.isValid;
        }
      }
    },

    handleSubmit(event) {
      event.preventDefault();
      const URL = 'http://test.ok.paymo.uz/public/user/register';
      console.log(this.fullName.value);

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

      console.log(JSON.stringify(body));

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
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  computed: {
    isFormValid() {
      return (
        this.repeatPassword.isValid &&
        this.password.isValid &&
        this.nickname.isValid &&
        this.fullName.isValid &&
        this.phone.isValid
      );
    },
  },
};
</script>

<style lang="scss" scoped module>
.register {
  @include material-card;
  top: 50%;
  max-width: 550px;
}

.registerForm {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

h2 {
  margin-top: 0;
  margin-bottom: 1.25em;
  font-size: 1.25em;
}

label,
.gender {
  position: relative;
  flex: 0 0 49%;
  display: block;
  box-sizing: border-box;
  margin-bottom: 1em;
  padding: 0.5em 1em;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 4px;
  font-size: 1em;
}

.labelText {
  position: absolute;
  top: 0;
  left: 1em;
  transform: translateY(-50%);
  padding: 0 0.5em;
  font-size: 0.75em;
  background-color: $color-background;
  color: $color-dark-s;
}

input {
  font-size: 1em;
  border: none;
  font-family: $font-primary;
  &:focus {
    outline: none;
  }
}

.gender {
  &:focus {
    outline: none;
  }
}

.requiredFields {
  margin-top: 0;
  margin-bottom: 1em;
  flex: 0 0 100%;
  font-size: 0.75em;
  color: $color-dark-s;
}

.submit {
  padding: 0.5em 1em;
  border-radius: 4px;
  background-color: $color-disabled;
  font-size: 0.875em;
  font-weight: 700;
  text-transform: uppercase;
  color: $color-background;
  transition: background, transform, 0.15s;
}

.submitActive {
  background-color: $color-primary;
  cursor: pointer;
  &:hover {
    background-color: $color-primary-s;
  }
  &:active {
    transform: translate(-1px, -1px);
    box-shadow: 0px 0.3px 0.5px rgba(0, 0, 0, 0.1),
      0px 2px 4px rgba(0, 0, 0, 0.2);
  }
}

.wrong {
  border-color: $color-red;
}
</style>
