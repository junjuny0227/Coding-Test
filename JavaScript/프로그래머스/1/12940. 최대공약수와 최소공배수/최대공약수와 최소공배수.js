function solution(n, m) {
    const answer = [1];
    let num = 2;

    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && m % i === 0) answer[0] = i;
    }

    if (m % n === 0) {
        answer[1] = m;
    } else {
        while (true) {
        if ((m * num) % n === 0) {
            answer[1] = m * num;
            break;
        }
        num++;
        }
    }

    return answer;
}