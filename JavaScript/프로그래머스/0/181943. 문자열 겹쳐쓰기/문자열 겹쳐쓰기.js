function solution(my_string, overwrite_string, s) {
    let arr1 = my_string.split("");
    let arr2 = overwrite_string.split("");
    for (let i = s; i < arr2.length + s; i++) arr1[i] = arr2[i - s];
    return arr1.join("");
}