function solution(s) {
    let answer = "";
    if (s.length % 2 !== 0) return s[s.length - 1 - Math.floor(s.length / 2)];
    else return answer + s[s.length / 2 - 1] + s[s.length / 2];
}