export default function handleBlur(event) {
  const data = this[event.target.id];
  if (data.showHint !== undefined) {
    data.showHint = !data.isValid;
    if (event.target.id === 'password') {
      this.repeatPassword.showHint = !this.repeatPassword.isValid;
    }
  }
}
