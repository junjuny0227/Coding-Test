function solution(my_string, num1, num2) {
    let arr = my_string.split("");
    const temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp
    return arr.join("");
}