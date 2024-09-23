function solution(a, b) {
    let answer = parseInt(a + "" + b + "") > parseInt(b + "" + a + "") ? parseInt(a + "" + b + "") : parseInt(b + "" + a + "");
    return answer;
}