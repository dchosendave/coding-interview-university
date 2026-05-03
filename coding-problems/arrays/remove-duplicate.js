function removeDuplicates(numbers) {
    let result = [];

    for (let num of numbers) {
        if (!result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(removeDuplicate([1, 2, 2, 3, 1, 4]));

