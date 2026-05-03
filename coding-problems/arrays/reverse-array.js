function reverseArray(numbers)
{
    let result = [];

    if (!Array.isArray(numbers) || numbers.length === 0)
    {
        return 'Invalid array';
    }

    for (let i = numbers.length - 1; i >= 0; i--)
    {
        result.push(numbers[i]);
    }

    return result;
}

console.log(reverseArray([1,2,3,4]));