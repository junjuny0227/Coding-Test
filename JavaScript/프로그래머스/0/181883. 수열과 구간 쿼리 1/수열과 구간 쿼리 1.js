function solution(arr, queries) {
    for (const [s, e] of queries) for (let i = s; i <= e; i++) arr[i]++;
    return arr;
}