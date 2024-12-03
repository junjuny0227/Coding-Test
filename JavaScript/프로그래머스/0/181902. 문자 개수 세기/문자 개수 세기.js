function solution(my_string) {
    let answer = Array(52).fill(0);
    let strArr = my_string.split("");
    for (const e of strArr) {
        if (e.charCodeAt(0) <= 90) answer[e.charCodeAt(0) - 65]++;
        else if (e.charCodeAt(0) >= 97) answer[e.charCodeAt(0) - 71]++;
    }
    return answer;
}