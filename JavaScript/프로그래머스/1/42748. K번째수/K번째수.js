function solution(array, commands) {
    const answer = [];
    
    for (const [i, j, k] of commands) {
        const sliceArr = array.slice(i - 1, j);
        const sortArr = sliceArr.sort((a, b) => a - b);
        
        answer.push(sortArr[k- 1]);
    }
    return answer;
}