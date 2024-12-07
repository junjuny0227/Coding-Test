function solution(array, n) {
    let answer = 0;
    let temp = array[0];
    for (const num of array) {
        if (Math.abs(temp - n) === Math.abs(num - n)) temp = temp > num ? num : temp;
        else if (Math.abs(temp - n) > Math.abs(num - n)) temp = num;
    }
    answer = temp;
    return answer;
}