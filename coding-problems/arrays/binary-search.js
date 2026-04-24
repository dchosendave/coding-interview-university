
function binarySearch(numbers, target) {
    let low = 0;
    let high = numbers.length - 1;

    while (low <= high) {
        let middle = Math.floor(low + (high - low) / 2);
        let value = numbers[middle];

        if (value < target) {
            low = middle + 1;
        }
        else if (value > target) {
            high = middle - 1;
        }
        else {
            return middle;
        }
    }

    return -1;
}

const numbers = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60];

console.log(binarySearch(numbers, 20));