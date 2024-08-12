function solution(str1, str2) {
    let answer = 0;
    if (str1.includes(str2)) {
        answer = 1;    
    } else {
        answer = 2;
    }
    return answer;
}