export function ceshi(a, b) {
  return a + b;
}

export function promise1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // eslint-disable-next-line
      // debugger;
      resolve('888');
    }, 2000);
  });
}
