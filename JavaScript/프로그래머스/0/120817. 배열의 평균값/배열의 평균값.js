function solution(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let answer = total / numbers.length;
    return answer;
}