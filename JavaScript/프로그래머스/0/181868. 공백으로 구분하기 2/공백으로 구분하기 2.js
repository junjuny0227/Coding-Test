function solution(my_string) {
    let answer = [];
    let trim_str = my_string.trim();
    let i = 0;
    while (true) {
        if (trim_str[i] !== " ") answer[i] += trim_str[i];
        if (trim_str[i + 1] === " ") i++;
        if (i === trim_str.length - 1) break;
    }
    return answer;
}