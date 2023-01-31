function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myNumber = 87;
const isEvenOrOdd = isEven(myNumber);
console.log(isEvenOrOdd);