function solution(my_strings, parts) {
    let answer = "";
    for (let i = 0; i < my_strings.length; i++)
        answer += my_strings[i].slice(parts[i][0], parts[i][1] + 1);
    return answer;
}