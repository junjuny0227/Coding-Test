function solution(my_string) {
    const arr1 = my_string.split("");
    const arr2 = arr1.reverse();
    let answer = arr2.join("");
    return answer;
}