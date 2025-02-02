function solution(order) {
    let answer = 0;
    for (const element of order) {
        if (element.includes("cafelatte")) answer += 5000;
        else answer += 4500;
    }
    return answer;
}