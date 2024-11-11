function solution(num_list) {
    let answer = 0;
    if (num_list.length >= 11) {
        for (let i = 0; i < num_list.length; i++) answer += num_list[i];
    } else {
        answer++;
        for (let i = 0; i < num_list.length; i++) answer *= num_list[i];
    }
    return answer;
}