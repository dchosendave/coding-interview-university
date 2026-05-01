function countEvens(numbers)
{
    let count = 0;

    for (let num of numbers)
    {
        if (num % 2 === 0)
        {
            count += 1;
        }
    }

    return count;
}

console.log(countEvens([1,2,3,4,5,6,7,8,9,10]));