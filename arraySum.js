function getSumInArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

const myNumbers = [12, 58, 45, 78, 96,];
const myNumbersTotal = getSumInArray(myNumbers);
console.log(myNumbersTotal);