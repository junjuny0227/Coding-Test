function solution(priorities, location) {
    let answer = 1;
    const indexArr = Array.from(Array(priorities.length).keys());
    const targetNum = priorities[location];
    const targetIndex = indexArr[location];
    
    while (true) {
        const firstEl = priorities.shift();
        const firstIndex = indexArr.shift();
        const hasBigger = priorities.some((v) => v > firstEl);
        
        if (hasBigger) {
            priorities.push(firstEl);
            indexArr.push(firstIndex);
        } else {
            if (targetNum === firstEl && targetIndex === firstIndex) {
                return answer;
            }
            answer++;
        }
    }
    
    return answer;
}