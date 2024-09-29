function solution(n_str) {
    let answer = n_str;
    if (n_str[0] === "0") {
        let i = 0;
        while (n_str[i] === "0" && i < n_str.length - 1) i++;
        answer = n_str.slice(i);
    }
    return answer;
}
