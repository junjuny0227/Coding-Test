function solution(s) {
    let answer = [];
    let arr = s.split(" ").map(Number);
    answer.push(Math.min(...arr));
    answer.push(Math.max(...arr));
    return answer.join(" ");
}