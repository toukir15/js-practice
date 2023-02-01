// find lowest number in 3 numbers 
function findLowest(first, second, third) {
    if (first < second && first < third) {
        return first;
    }
    else if (second < first && second < third) {
        return second;
    }
    else {
        return third;
    }
}
const first = 50;
const second = 60;
const third = 90;
const lowMark = findLowest(first, second, third);
console.log(lowMark);

// find lowest number using Math.min
function findLowest(first, second, third) {
    const lowest = Math.min(first, second, third);
    return lowest;
}
const number1 = 50;
const number2 = 60;
const number3 = 90;
const smallNumber = findLowest(number1, number2, number3);
console.log(smallNumber);