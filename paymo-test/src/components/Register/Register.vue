<template src='./index.html'></template>

<script>
/* eslint-disable operator-linebreak */
// https://github.com/prettier/prettier/issues/3806 due to this issue
import handleChange from './handleChange';
import handleBlur from './handleBlur';
import handleSubmit from './handleSubmit';
import handleVerify from './handleVerify';
import submitVerify from './submitVerify';

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
      verificationCode: {
        value: '',
        isValid: false,
      },
      registrationId: null,
    };
  },
  methods: {
    handleChange,
    handleBlur,
    handleSubmit,
    handleVerify,
    submitVerify,
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

<style src='./style.scss' lang="scss" scoped module>
</style>
