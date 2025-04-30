let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
  console.log(b);
  [a, b] = [b, a + b];
}