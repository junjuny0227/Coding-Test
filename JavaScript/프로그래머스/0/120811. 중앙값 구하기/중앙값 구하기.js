function solution(array) {
    array.sort((a, b) => a - b);
    let answer = array[Math.floor(array.length / 2)];
    return answer;
}