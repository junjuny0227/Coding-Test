function solution(arr) {
    let answer = [];
    let minNum = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) if (arr[i] !== minNum) answer.push(arr[i]);
    if (answer.length === 0) answer.push(-1);
    return answer;
}