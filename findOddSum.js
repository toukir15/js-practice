function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 == 1) {
            sum = sum + element;
        }
    }
    return sum;

}

const myNumbers = [50, 52, 68, 25, 45, 85, 84];
const myOddTotal = getSum(myNumbers);
console.log(myOddTotal);