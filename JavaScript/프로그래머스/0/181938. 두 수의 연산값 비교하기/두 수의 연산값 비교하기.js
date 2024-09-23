function solution(a, b) {
    let answer = Number(String(a) + String(b)) > 2 * a * b ? Number(String(a) + String(b)) : 2 * a * b;
    return answer;
}