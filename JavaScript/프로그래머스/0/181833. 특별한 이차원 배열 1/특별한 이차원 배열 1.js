function solution(n) {
    let answer = [];
    for (let i = 0; i < n; i++) answer.push([]);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) answer[i].push(1);
            else answer[i].push(0);
        }
    }
    return answer;
}