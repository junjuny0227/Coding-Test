function solution(arr, intervals) {
    let answer = [];
    for (let i = intervals[0][0]; i <= intervals[0][1]; i++) answer.push(arr[i]);
    for (let i = intervals[1][0]; i <= intervals[1][1]; i++) answer.push(arr[i]);
    return answer;
}