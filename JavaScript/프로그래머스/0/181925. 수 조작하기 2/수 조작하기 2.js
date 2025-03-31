function solution(numLog) {
    let answer = "";
    numLog.map((num, i) => {
        if (numLog[i + 1] === num + 1) answer += "w";
        else if (numLog[i + 1] === num - 1) answer += "s";
        else if (numLog[i + 1] === num + 10) answer += "d";
        else if (numLog[i + 1] === num - 10) answer += "a";
    })
    return answer;
}