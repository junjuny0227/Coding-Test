function solution(arr, n) {
    if (arr.length % 2 !== 0) {
        for (let i = 0; i < arr.length; i++) if (i % 2 === 0) arr[i] += n;
    } else for (let i = 0; i < arr.length; i++) if (i % 2 !== 0) arr[i] += n;
    
    return arr;
}