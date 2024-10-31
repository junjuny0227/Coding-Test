function solution(n) {
    let answer = -1;
    for (let i = 1; i <= n; i++) {
        if (n / i === i) {
            answer = (i + 1) ** 2;
            break;
        }
    }
    return answer;
}