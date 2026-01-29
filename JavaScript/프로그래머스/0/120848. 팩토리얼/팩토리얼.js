function solution(n) {
    let answer = 1;
    let total = 1
    
    while (true) {
        total = answer * total;
        
        if (total <= n && (answer + 1) * total > n) break;
        
        answer++;
    }
    
    return answer;
}