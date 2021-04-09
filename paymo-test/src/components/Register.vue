<template>
  <div :class="$style.register">
    <h2>Registration</h2>
    <form :class="$style.registerForm" @input="handleChange">
      <label :class="$style.fullName">
        <span :class="$style.labelText">Full Name *</span>
        <input id="fullName" type="text" v-model="fullName" required>
      </label>
      <label :class="$style.nickname">
        <span :class="$style.labelText">Nickname *</span>
        <input id="nickName" type="text" v-model="nickName" required>
      </label>
      <label :class="$style.password">
        <span :class="$style.labelText">Password *</span>
        <input id="password" type="password" v-model="password" required>
      </label>
      <label :class="$style.passwordRepeat">
        <span :class="$style.labelText">Repeat Password *</span>
        <input id="passwordRepeat" type="password" v-model="passwordRepeat" required>
      </label>
      <label :class="$style.phone">
        <span :class="$style.labelText">Phone *</span>
        <input id="phone" type="text" :value="phone.number" required>
      </label>
      <label :class="$style.country">
        <span :class="$style.labelText">Country</span>
        <input id="country" type="text" v-model="country">
      </label>
      <label :class="$style.city">
        <span :class="$style.labelText">City</span>
        <input id="city" type="text" v-model="city">
      </label>
      <!-- <label :class="$style.gender">
        <span :class="$style.labelText">Gender</span>
        <input id="gender" type="text" v-model="gender">
      </label> -->
      <select id="gender" :class="$style.gender" v-model="gender">
        <option value="none">Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
      </select>
      <p :class="$style.note">* - required fields</p>
      <input :class="$style.submit" type="submit" value="sign up" disabled>
    </form>
  </div>
</template>

<script>
import * as Validators from '../middleware/validators';

export default {
  name: 'register',
  data() {
    return {
      fullName: '',
      nickName: '',
      password: '',
      passwordRepeat: '',
      phone: {
        number: '998 ',
      },
      gender: 'none',
      country: '',
      city: '',
    };
  },
  methods: {
    handleChange(event) {
      let { value } = event.target;
      switch (event.target.id) {
        case 'phone':
          value = Validators.phoneFormat(value);
          this.phone = value ? { number: value } : { number: this.phone.number };
          console.log('asd');
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped module>
.register {
  @include material-card;
  top: 50%;
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
  padding: .5em 1em;
  border: 1px solid rgba(0, 0, 0, 0.38);
  border-radius: 4px;
  font-size: 1em;
}

.labelText {
  position: absolute;
  top: 0;
  left: 1em;
  transform: translateY(-50%);
  padding: 0 .5em;
  font-size: .75em;
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

.note {
  margin-top: 0;
  margin-bottom: 1em;
  flex: 0 0 100%;
  font-size: .75em;
  color: $color-dark-s;
}

.submit {
  padding: 0.5em 1em;
  border-radius: 4px;
  background-color: $color-disabled;
  font-size: .875em;
  font-weight: 700;
  text-transform: uppercase;
  color: $color-background;
  transition: background, transform, .15s;
}

.submitActive {
  background-color: $color-primary;
  cursor: pointer;
  &:hover {
    background-color: $color-primary-s;
  }
  &:active {
    transform: translate(-1px, -1px);
    box-shadow: 0px 0.3px 0.5px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
}
</style>
