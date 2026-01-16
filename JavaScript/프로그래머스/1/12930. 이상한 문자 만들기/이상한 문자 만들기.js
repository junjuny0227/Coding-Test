function solution(s) {
    const answer = [];
    const temp = [];
    const wordArray = s.split(" ");
    
    for (let i = 0; i < wordArray.length; i++) {
        temp.push([]);
        for (let j = 0; j < wordArray[i].length; j++) {
            if (j % 2 === 0) {
                temp[i].push(wordArray[i][j].toUpperCase());
            } else {
                temp[i].push(wordArray[i][j].toLowerCase());
            }
        }
        answer.push(temp[i].join(""));
    }
        
    return answer.join(" ");
}