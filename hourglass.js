function hourglassSum(arr) {
    const WIDTH = 3;
    const HEIGHT = 3;
    
    const sums = [];
    
    for (let row = 0 ; row <= arr.length - HEIGHT ; row ++) {
        for (let corner = 0 ; corner <= arr[row].length - WIDTH ; corner++) {
            const hourglassTop = arr[row].slice(corner, corner + 3);
            const hourglassMid = arr[row + 1][corner + 1];
            const hourglassBottom = arr[row + 2].slice(corner, corner + 3);
            const hourGlassValues = hourglassTop.concat(hourglassMid, hourglassBottom);
            const hourglassSum = hourGlassValues.reduce((p, c) => p + c);
            
            sums.push(hourglassSum);
        }
    }

    const orderedSums = sums.sort((a, b) => a - b);
    return orderedSums[orderedSums.length - 1];
}