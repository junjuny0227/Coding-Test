function solution(arr) {
    if (arr.length === arr[0].length) return arr;
    
    if (arr.length > arr[0].length) {
        arr.map((childArr) => {
            while (childArr.length < arr.length) {
                childArr.push(0);
            }
        })
    } else {
        while (arr.length < arr[0].length) {
            arr.push(new Array(arr[0].length).fill(0));
        }
    }
    
    return arr;
}