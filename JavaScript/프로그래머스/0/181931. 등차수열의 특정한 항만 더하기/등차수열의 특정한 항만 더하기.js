function solution(a, d, included) {
    let answer = 0;
    included.map((bool) => {
        if (bool) answer += a;
        a += d;
    })
    return answer;
}