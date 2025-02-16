function solution(keyinput, board) {
    let answer = [0, 0];
    keyinput.forEach((key) => {
        switch(key) {
            case "up":
                answer[1]++;
                if (answer[1] > Math.floor(board[1] / 2)) answer[1] = Math.floor(board[1] / 2);
                break;
            case "down":
                answer[1]--;
                if (answer[1] < Math.floor(board[1] / 2) * -1) answer[1] = Math.floor(board[1] / 2) * -1;
                break;
            case "right":
                answer[0]++;
                if (answer[0] > Math.floor(board[0] / 2)) answer[0] = Math.floor(board[0] / 2);
                break;
            case "left":
                answer[0]--;
                if (answer[0] < Math.floor(board[0] / 2) * -1) answer[0] = Math.floor(board[0] / 2) * -1;
                break;
        }
    });
    return answer;
}