function solution(dots) {
    const [a, b, c, d] = dots;
    const dotList = [[a, b, c, d], [a, c, b, d], [a, d, b, c]];
    
    for (let i = 0; i < dotList.length; i++) {
        const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dotList[i];
        const angle1 = (y1 - y2) / (x1- x2);
        const angle2 = (y3 - y4) / (x3- x4);
        
        if (angle1 === angle2) return 1;
    }
    
    return 0;
}