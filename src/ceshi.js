import { reject } from 'lodash';

export function ceshi(a, b) {
  return a + b;
}

export function promise1(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1111111111111111111111111');
    }, 2000);
  });
}
