function solution(my_string) {
    const arr = my_string.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u") {
            arr[i] = "";
        }
    }
    let answer = arr.join("");
    return answer;
}