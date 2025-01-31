function solution(n, slicer, num_list) {
    switch (n) {
        case 1:
            return num_list.slice(0, slicer[1] + 1);
        case 2:
            return num_list.slice(slicer[0]);
        case 3:
            return num_list.slice(slicer[0], slicer[1] + 1);
        case 4:
            const nums = num_list.slice(slicer[0], slicer[1] + 1);
            return nums.filter((_, i) => (i + 1) % 2 !== 0);
    }
}