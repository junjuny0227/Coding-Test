function solution(x) {
    let total = 0;
    let arr = x.toString().split("").map((v) => Number(v));
    for (let i = 0; i < arr.length; i++) total += arr[i];
    return x % total === 0 ? true : false;
}