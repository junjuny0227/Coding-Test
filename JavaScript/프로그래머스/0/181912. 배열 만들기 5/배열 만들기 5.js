function solution(intStrs, k, s, l) {
    let answer = [];
    for (const intStr of intStrs) if (+intStr.slice(s, s + l) > k) answer.push(+intStr.slice(s, s + l));
    return answer;
}