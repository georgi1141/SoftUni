function test(a, start, end) {
  if (!Array.isArray(a)) {
    return NaN;
  }

  startIndex = Math.max(start, 0)
  endIndex = Math.min(end, a.length - 1)

  return a.slice(startIndex, endIndex + 1).reduce((a, b) => a + Number(b), 0);
}

console.log(test([10, 20, 30, 40, 50, 60], 3, 300));
console.log(test([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
