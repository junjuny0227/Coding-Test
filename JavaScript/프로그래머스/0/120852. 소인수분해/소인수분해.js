function solution(n) {
  const array = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      const count = [];
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) count.push(j);
      }
      if (count.length === 2) array.push(i);
    }
  }

  const set = new Set(array);
  return [...set].sort((a, b) => a - b);
}
