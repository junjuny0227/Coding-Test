function solution(arr) {
    const answer = [];
    
    if (!arr.includes(2)) return [-1];
    
    const startIndex = arr.indexOf(2);
    const endIndex = arr.lastIndexOf(2);
    
    for (let i = startIndex; i <= endIndex; i++) answer.push(arr[i])
    
    return answer;
}