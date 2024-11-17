function solution(strArr) {
    let answer = [];
    for (let i = 0; i < strArr.length; i++) if (!strArr[i].includes("ad")) answer.push(strArr[i]);
    return answer;
}