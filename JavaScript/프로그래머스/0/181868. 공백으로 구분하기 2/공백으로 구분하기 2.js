function solution(my_string) {
    my_string = my_string.split(" ")
    let answer = my_string.filter((my_string) => my_string !== "");
    return answer
}