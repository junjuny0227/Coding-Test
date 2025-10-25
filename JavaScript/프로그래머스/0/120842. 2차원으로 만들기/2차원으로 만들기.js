function solution(num_list, n) {
    const answer = [];
    
    for (let i = 0; i < num_list.length; i++) {
        if ((i + 1) % n === 0) {
            const newArray = []
            for (let j = n - 1; j >= 0; j--) newArray.push(num_list[i - j])
            answer.push(newArray)
        }
    }
    
    return answer;
}