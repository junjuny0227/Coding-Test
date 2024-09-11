function solution(start_num, end_num) {
    let answer = [];
    for (let i = start_num; i >= end_num; i--) answer.push(i);
    return answer;
}