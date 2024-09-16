function solution(my_string, is_suffix) {
    let answer = 0;
    let arr = [];
    for (let i = my_string.length; i >= my_string.length - is_suffix.length; i--) arr.push(my_string[i]);
    console.log(arr.reverse().join(""))
    if (arr.join("") === is_suffix) answer = 1;
    else answer = 0;
    return answer;
}