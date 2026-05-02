function countOccurrences(numbers, target)
{
    let count = 0;

    for (let num of numbers)
    {
        if (num === target)
        {
            count += 1;
        }
    }

    return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));