function solution(num_list) {
    let answer = [];
    if (num_list[num_list.length - 1] > num_list[num_list.length - 2]) {
        num_list[num_list.length] = num_list[num_list.length - 1] - num_list[num_list.length - 2];
        answer = num_list;
    } else {
        num_list[num_list.length] = num_list[num_list.length - 1] * 2;
        answer = num_list;
    }
    return answer;
}