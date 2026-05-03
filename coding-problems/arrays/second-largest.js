function findSecondLargest(numbers) {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of numbers) {
        if (num > first) {
            second = first;
            first = num;
        }
        else if (num < first && num > second) {
            second = num;
        }
    }

    if (second === -Infinity) {
        return 'No second largest!';
    }

    return second;
}