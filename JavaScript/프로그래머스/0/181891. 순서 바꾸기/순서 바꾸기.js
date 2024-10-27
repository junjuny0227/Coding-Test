function solution(num_list, n) {
    let answer = [];
    for (let i = n; i < num_list.length; i++) answer.push(num_list[i]);
    for (let i = 0; i < n; i++) answer.push(num_list[i]);
    return answer;
}