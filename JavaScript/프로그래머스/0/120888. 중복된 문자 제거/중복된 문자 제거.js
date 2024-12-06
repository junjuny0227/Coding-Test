function solution(my_string) {
    let answer = my_string.split("");
    for (let i = 0; i < answer.length; i++) for (let j = i + 1; j < answer.length; j++) if (answer[j] === answer[i]) answer[j] = "";
    return answer.join("");
}