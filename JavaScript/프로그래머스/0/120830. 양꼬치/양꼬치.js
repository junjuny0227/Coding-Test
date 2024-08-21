function solution(n, k) {
    k -= Math.floor(n / 10);
    let answer = (12000 * n) + (2000 * k);
    return answer;
}