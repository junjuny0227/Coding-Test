function solution(my_str, n) {
    const answer = [];
    for (let i = 0; i < my_str.length; i++) if (i % n === 0) answer.push(my_str.substr(i, n));
    return answer;
}