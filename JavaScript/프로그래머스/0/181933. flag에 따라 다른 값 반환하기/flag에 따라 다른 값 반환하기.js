function solution(a, b, flag) {
    let answer = 0;
    if (flag === true) answer = a + b;
    else answer = a - b;
    return answer;
}