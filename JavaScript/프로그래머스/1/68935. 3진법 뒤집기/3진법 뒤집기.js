function solution(n) {
    const array = [];
    let answer = 0;
    
    while (Math.floor(n / 3) !== 0) {
        array.push(n % 3);
        n = Math.floor(n / 3);
    }
    
    array.push(n % 3);
    array.reverse();
    
    array.map((num, index) => {
        answer += num * (3 ** index);
    })
    
    return answer;
}