function solution(strArr) {
    let answer = 0;
    const arr = new Array(30).fill(0);
    for (const str of strArr) arr[str.length - 1] += 1;
    return Math.max(...arr);
}