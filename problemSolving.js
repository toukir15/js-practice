/* Suppose, you go to stay in a hotel in Thailand or somewhere else, now ask the hotel authority to ask the rent, he said--
1. first condition: If you stay at our hotel for 1-10 days then the rent is 500 taka/day

2. second condition: If staying for 20 days then 300 Tk/day from 10 days to 20 days

3. third condition: If you stay for one month then the rent for the next 20 days is Rs. 100 / day

question: Now, if you stay for 25 days, how much will the rent cost? */

function getRent(days) {
    if (days >= 1 && days <= 10) {
        const rent = days * 500;
        return rent;
    }
    else if (days >= 1 && days <= 20) {
        const firstTenDaysRent = 5000;
        const secondTen = days - 10;
        const secondTenDaysRent = secondTen * 300;
        const rent = firstTenDaysRent + secondTenDaysRent;
        return rent;
    }
    else {
        const firstTwentyDaysRent = 8000;
        const twentyOneToInfinity = days - 20;
        const twentyOneToInfinityRent = twentyOneToInfinity * 100;
        const rent = firstTwentyDaysRent + twentyOneToInfinityRent;
        return rent;
    }

}

/* find largest name in array ? */

const myDays = 18;
const myDaysRent = getRent(myDays);
console.log('My total rent is ', myDaysRent);



function longestStringInArray(friends) {
    let longestName = "";
    for (var i = 0; i < friends.length; i++) {
        const index = i;
        const element = friends[index];
        if (longestName.length < element.length) {
            longestName = element;
        }
    }
    return longestName;
}

const myFriends = ['najmul', 'shiam', 'sojib', 'toukir', 'robiulya',];
const myBigFriend = longestStringInArray(myFriends);
console.log(myBigFriend);
