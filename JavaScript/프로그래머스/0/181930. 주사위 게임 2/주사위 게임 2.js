function solution(a, b, c) {
    if (a !== b && b !== c && a !== c) 
        return a + b + c;
    else if (a === b && a !== c || b === c && b !== a || a === c && a !== b)
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    else if (a === b && b === c && a === c) 
        return (a + b + c) * (a ** 2 + b ** 2 + c ** 2 ) * (a ** 3 + b ** 3 + c ** 3);
}