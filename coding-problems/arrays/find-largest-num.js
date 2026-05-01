function findLargest(numbers) {
    let largest;

    for (let num of numbers) {
        if (num > largest) {
            largest = num;
        }
    }

    return largest;
}

console.log(findLargest([1, 2, 3, 4, 5, 6, 25, 5, 4, 3, 2]));