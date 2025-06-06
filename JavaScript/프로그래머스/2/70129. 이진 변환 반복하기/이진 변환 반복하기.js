function solution(s) {
    const answer = [0, 0];
    while (s !== "1") {
        const temp = s.split("");
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === "0") {
                answer[1]++;
                temp[i] = "";
            }
        }
        s = temp.join("").length.toString(2);
        answer[0]++;
    }
    return answer
}