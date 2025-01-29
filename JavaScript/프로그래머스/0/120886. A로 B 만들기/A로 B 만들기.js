function solution(before, after) {
    if (JSON.stringify(before.split("").sort()) === JSON.stringify(after.split("").sort())) return 1;
    else return 0;
}