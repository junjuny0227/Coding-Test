function solution(arr) {
    const answer = [];
    arr.map((num, i) => {
        if (i === 0) answer.push(num);
        else if (num === arr[i - 1]) null;
        else answer.push(num)
    })
    return answer;
}