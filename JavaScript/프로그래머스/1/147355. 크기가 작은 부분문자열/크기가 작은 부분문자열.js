function solution(t, p) {
    let answer = 0;
    for (let i = 0; i < t.length; i++) {
        let num = ''
        for (let j = 0; j < p.length; j++) {
            num += t[i + j];
        }
        if (Number(num) <= Number(p)) answer++;
    }
    return answer;
}