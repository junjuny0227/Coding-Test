function solution(myString) {
    let answer = [...myString].map((v) => (v < "l" ? "l" : v)).join("");
    return answer;
}