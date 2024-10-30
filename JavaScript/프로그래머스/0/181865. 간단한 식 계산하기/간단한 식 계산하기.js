function solution(binomial) {
    let answer = 0;
    let arr = binomial.split(" ");
    if (arr[1] === "+")
        return Number(arr[0]) + Number(arr[2]);
    else if (arr[1] === "-")
        return Number(arr[0]) - Number(arr[2]);
    else if (arr[1] === "*")
        return Number(arr[0]) * Number(arr[2]);
}