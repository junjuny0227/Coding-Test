function solution(str1, str2) {
    let answer = 0;
    if (str2.includes(str1)) answer = 1;
    else answer = 0;
    return answer;
}