function solution(arr1, arr2) {
    let answer = arr1.length > arr2.length ? 1 : -1;
    if (arr1.length === arr2.length) {
        let count1 = 0;
        let count2 = 0;
        for (let i = 0; i < (arr1.length > arr2.length ? arr1.length : arr2.length); i++) {
            count1 += arr1[i];
            count2 += arr2[i];
        }
        if (count1 === count2) answer = 0;
        else answer = count1 > count2 ? 1 : -1;
    }
    return answer;
}