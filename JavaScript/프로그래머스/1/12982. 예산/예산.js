function solution(d, budget) {
    let answer = 0;
    const department = d.sort((a, b) => a - b);
    department.forEach((num) => {
        if (num <= budget) {
            answer++;
            budget -= num;
        }
    })
    return answer;
}