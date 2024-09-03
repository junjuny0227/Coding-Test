function solution(cipher, code) {
    let answer = [];
    for (let i = code - 1; i < cipher.length; i += code) answer.push(cipher[i]);
    return answer.join("");
}