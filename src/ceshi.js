export function ceshi(a, b) {
  return a + b;
}

export function promise1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('1111111111111111111111111');
    }, 2000);
  });
}
