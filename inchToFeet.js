// to convert inch to feet

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const myInches = 60;
const myFeet = inchToFeet(myInches);
console.log('My feet is: ', myFeet);