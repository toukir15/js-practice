function isLeapyear(year) {
    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYear = 2020;
const isMyYearIsLeapYear = isLeapyear(myYear);
console.log(isMyYearIsLeapYear);