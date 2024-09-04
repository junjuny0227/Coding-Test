function solution(array) {
    let answer = [array[0], 0];
    for (let i = 1; i < array.length; i++) {
        if (answer[0] < array[i]) {
            answer[0] = array[i];
            answer[1] = i;
        }
    }
    return answer;
}