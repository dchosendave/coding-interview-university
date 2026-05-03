function findSecondLargest(numbers)
{
    let first = -Infinity;
    let second = -Infinity;

    for (let num of numbers)
    {
        if (num >= first)
        {
            second = first;
            first = num;   
        }
    }
    return second;
}

console.log(findSecondLargest([7,7,5,3]));