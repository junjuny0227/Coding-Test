function solution(n) {
    let i = 1;
    while (true) {
        if (n * i % 6 === 0) return n * i / 6;
        i++;
    }
}