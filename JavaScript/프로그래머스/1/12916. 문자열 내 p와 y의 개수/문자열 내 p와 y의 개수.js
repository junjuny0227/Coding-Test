function solution(s){
    let answer = true;
    let count_p = 0;
    let count_y = 0;

    const arr = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "p" || s[i] === "P") {
            count_p++;
        } else if (s[i] === "y" || s[i] === "Y") {
            count_y++;
        }
    }
    if (count_p === count_y) {
        answer = true;
    } else if (count_p === 0 && count_y === 0) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}