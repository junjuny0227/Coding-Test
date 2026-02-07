function solution(code) {
    let ret = '';
    let mode = 0;
    
    for (let idx = 0; idx < code.length; idx++) {
        if (mode === 0) {
            if (code[idx] !== '1') idx % 2 === 0 && (ret += code[idx]);
            else mode = 1;
        } else {
            if (code[idx] !== '1') idx % 2 === 1 && (ret += code[idx])
            else mode = 0;
        }
    }
    
    return ret.length === 0 ? "EMPTY" : ret;
}