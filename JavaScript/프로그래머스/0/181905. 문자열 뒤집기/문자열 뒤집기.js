function solution(my_string, s, e) {
    let answer = [...my_string];
    return answer.slice(0,s).join("") + answer.slice(s, e + 1).reverse().join("") + answer.slice(e + 1).join("");
}