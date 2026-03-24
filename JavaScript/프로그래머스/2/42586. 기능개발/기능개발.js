function solution(progresses, speeds) {
    const days = progresses.map((el, index) => Math.ceil((100 - el) / speeds[index]));
    const answer = [];

    while (days.length > 0) {
        const first = days.shift();
        let count = 1;
        
        while (days[0] <= first) {
            days.shift()
            count += 1;
        }
        
        answer.push(count)
    }
    return answer;
}
