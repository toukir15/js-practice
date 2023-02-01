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