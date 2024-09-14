function solution(my_string, is_prefix) {
    let answer = 0;
    let arr = [];
    for (let i = 0; i < is_prefix.length; i++) arr.push(my_string[i])
    if (arr.join("") === is_prefix) answer = 1;
    else answer = 0;
    return answer;
}