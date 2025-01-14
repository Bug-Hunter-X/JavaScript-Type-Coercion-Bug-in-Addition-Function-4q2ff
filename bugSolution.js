function foo(a, b) {
  // Explicit type checking and conversion
  a = a === null ? 0 : Number(a);
  b = b === null ? 0 : Number(b);
  return a + b;
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(1, '2')); //3
console.log(foo('1',2)); //3