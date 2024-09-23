function solution(num_list) {
    let answer = 0;
    let total = 0
    let multiply = 1;
    for (let i = 0; i < num_list.length; i++) {
        total += num_list[i];
        multiply *= num_list[i];
    }
    if (multiply < total ** 2) answer = 1;
    else answer = 0;
    return answer;
}