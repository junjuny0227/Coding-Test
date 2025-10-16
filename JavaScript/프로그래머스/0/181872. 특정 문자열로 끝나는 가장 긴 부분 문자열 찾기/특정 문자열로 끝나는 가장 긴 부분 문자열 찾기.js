function solution(myString, pat) {
    let index = 0;
    
    for (let i = myString.length - pat.length; i > 0; i--) {
        if (myString.slice(i, i + pat.length) === pat) {
            index = i;
            break;
        }
    }
    
    return myString.slice(0, index + pat.length);
}