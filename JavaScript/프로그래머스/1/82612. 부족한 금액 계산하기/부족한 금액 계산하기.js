function solution(price, money, count) {
    let answer = money;
    for (let i = 1; i <= count; i++) answer -= price * i;
    if (answer < 0) return Math.abs(answer);
    return 0
}