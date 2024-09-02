function solution(money) {
    const coffee = Math.floor(money / 5500)
    const change = money % 5500;
    let answer = [coffee, change];
    return answer;
}