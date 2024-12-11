function solution(arr, queries) {
    for (const [s, e, k] of queries) for (let i = s; i <= e; i++) if (i % k === 0) arr[i]++
    return arr;
}