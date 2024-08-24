function solution(n) {
    let answer = 0;
    for (let i = 0; i ** 2 <= n; i++) {
        if (i ** 2 === n) answer = 1;
        else answer = 2;
    }
    return answer;
}