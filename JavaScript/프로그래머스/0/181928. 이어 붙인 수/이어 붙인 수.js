function solution(num_list) {
    let answer = 0;
    let even = "";
    let odd = "";
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 1) odd += String(num_list[i]);
        else even += String(num_list[i]);
    }
    answer = Number(odd) + Number(even)
    return answer;
}