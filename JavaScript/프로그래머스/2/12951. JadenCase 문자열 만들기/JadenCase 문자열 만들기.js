function solution(s) {
    let arr = s.toLowerCase().split(" ");
    return arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)).join(" ");
}