function solution(age) {
    let answer = "";
    let arr = age.toString().split("");
    for (const num of arr) answer += String.fromCharCode(Number(num) + 97);
    return answer;
}