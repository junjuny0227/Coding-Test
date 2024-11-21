function solution(arr, delete_list) {
    let answer = [];
    for (const num of arr) if(!delete_list.includes(num)) answer.push(num);
    return answer;
}