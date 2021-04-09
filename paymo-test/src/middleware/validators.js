/**
 *
 * @param {String} value
 */

export function phoneFormat(value) {
  let res;
  // prevent deleting of 998 prefix
  if (/^998 /.test(value)) {
    // check sting to be only digits, starts from 998 and max length of 9
    if (/^998 \d{0,9}$/.test(value)) {
      res = value;
    } else {
      res = false;
    }
  } else {
    res = '998 ';
  }
  return res;
}

export function password(value) {
  return value;
}
