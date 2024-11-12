function solution(numbers, direction) {
    direction === "right" ? numbers.splice(0, 0, numbers.pop()) : numbers.push(numbers.shift());
    return numbers
}