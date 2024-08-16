function solution(my_string, letter) {
    const arr = my_string.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === letter) {
            arr[i] = "";
        }
    }
    let answer = arr.join("");
    return answer;
}