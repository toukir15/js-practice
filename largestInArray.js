function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (largest < element) {
            largest = element;
        }
    }
    return largest;
}
const numbers = [23, 56, 89, 4, 75, 500];
const findLargestNumber = findLargest(numbers);
console.log(findLargestNumber);