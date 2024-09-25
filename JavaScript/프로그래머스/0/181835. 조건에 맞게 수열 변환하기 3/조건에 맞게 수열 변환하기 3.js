function solution(arr, k) {
    let answer = [];
    if (k % 2 === 0) for (let i = 0; i < arr.length; i++) answer.push(arr[i] + k)
    else for (let i = 0; i < arr.length; i++) answer.push(arr[i] * k)
    return answer;
}