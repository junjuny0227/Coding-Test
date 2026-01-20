function solution(s) {
    const answer = [];
    const arr = s.split('');
    const uniqueArr = [...new Set(arr)].sort();
    const countArr = new Array(uniqueArr.length).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        const index = uniqueArr.indexOf(arr[i]);
        countArr[index]++;
    }
    
    for (let i = 0; i < uniqueArr.length; i++) {
        if (countArr[i] === 1) answer.push(uniqueArr[i]);
    }
    
    return answer.join("");
}