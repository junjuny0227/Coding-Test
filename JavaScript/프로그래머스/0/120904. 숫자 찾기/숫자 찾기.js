function solution(num, k) {
    let answer = 0;
    let arr = num.toString().split("").map((v) => Number(v));
    if (arr.includes(k)) return arr.indexOf(k) + 1;
    else return -1
}