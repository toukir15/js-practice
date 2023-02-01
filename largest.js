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
const topMarks = largestNumber(first, second, third);
console.log(topMarks);