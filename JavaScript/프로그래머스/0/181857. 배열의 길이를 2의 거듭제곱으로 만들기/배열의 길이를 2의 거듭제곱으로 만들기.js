function solution(arr) {
    const answer = [...arr];
    let length = null;
    
    for (let i = 0; i <= 10; i++) {
        if (answer.length <= 2 ** i) {
            length = 2 ** i;
            break;
        }
    }
    
    if (answer.length === length) return answer;
    
    for (let i = answer.length; i < length; i++) {
        answer.push(0);
    }
    
    return answer;
}