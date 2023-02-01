// find largest in 3 numbers 
function largestNumber(first, second, third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else {
        return third;
    }
}
const first = 50;
const second = 60;
const third = 90;
const topMark = largestNumber(first, second, third);
console.log(topMark);

// find largest number using Math 
function findLargest(first, second, third) {
    const largest = Math.max(first, second, third);
    return largest;
}
const number1 = 50;
const number2 = 60;
const number3 = 90;
const numberLargest = findLargest(number1, number2, number3);
console.log(numberLargest);