<template>
  <div :class="$style.register">
    <h2>Registration</h2>
    <form :class="$style.registerForm" @input="handleChange">
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
          $style.passwordRepeat,
          passwordRepeat.showHint ? $style.wrong : '',
        ]"
      >
        <span :class="$style.labelText">Repeat Password *</span>
        <input
          id="passwordRepeat"
          type="password"
          v-model="passwordRepeat.value"
          v-on:blur="handleBlur"
          required
        />
      </label>

      <label :class="[$style.phone, phone.showHint ? $style.wrong : '']">
        <span :class="$style.labelText">Phone *</span>
        <input
          id="phone"
          type="text"
          :value="phone.number"
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
        type="submit"
        value="continue"
        disabled
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
      passwordRepeat: {
        value: '',
        isValid: false,
        showHint: false,
      },
      phone: {
        number: '998 ',
        isValid: false,
        showHint: false,
      },
      gender: 'none',
      country: '',
      city: '',
      isFormValid: false,
    };
  },
  methods: {
    handleChange(event) {
      console.log('asd');
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
          console.log(this.nickname.isValid);
          break;

        case 'password':
          this.password.isValid = Validators.password(value);
          this.passwordRepeat.isValid = this.password.value === this.passwordRepeat.value;
          console.log(this.password.isValid);
          break;
        case 'passwordRepeat':
          this.passwordRepeat.isValid = this.password.value === event.target.value;
          break;

        default:
          break;
      }

      this.isFormValid =
        this.passwordRepeat.isValid &&
        this.password.isValid &&
        this.nickname.isValid &&
        this.fullName.isValid &&
        this.phone.isValid;
    },

    handleBlur(event) {
      const data = this[event.target.id];
      if (data.showHint !== undefined) {
        data.showHint = !data.isValid;
        if (event.target.id === 'password') {
          this.passwordRepeat.showHint = !this.passwordRepeat.isValid;
        }
      }
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
  border-color: red;
}
</style>
