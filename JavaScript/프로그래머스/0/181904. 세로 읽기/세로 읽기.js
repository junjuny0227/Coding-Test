function solution(my_string, m, c) {
    let answer = '';
    const temp = [];
    for (let i = 0; i < my_string.length; i += m) temp.push(my_string.slice(i, i + m));
    for (const str of temp) answer += str[c - 1];
    return answer;
}