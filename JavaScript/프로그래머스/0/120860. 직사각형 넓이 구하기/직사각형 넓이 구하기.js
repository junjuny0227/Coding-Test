function solution(dots) {
    const minX = Math.min.apply(null, dots.map((num) => num[0]));
    const maxX = Math.max.apply(null, dots.map((num) => num[0])); 
    const minY = Math.min.apply(null, dots.map((num) => num[1]));
    const maxY = Math.max.apply(null, dots.map((num) => num[1]));
    
    return (maxX - minX) * (maxY - minY);
}