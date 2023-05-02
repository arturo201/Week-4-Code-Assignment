
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


let subtractFirstAndLast = () => {
    // assigned the first value in the ages array
    let firstElement = ages[0];
    // assigned the last value in the ages array
    let lastElement = ages[ages.length - 1];
    // subtract the first element from the last element
    let difference = lastElement - firstElement;
    
    console.log(`First Element subtracted by the last element = ${difference}`)
};
subtractFirstAndLast();

let subtractNewAge = () => {
    // push() adds a number to the last index of the array
    ages.push(10);
    // calling this function will perform the calculations inside it
    subtractFirstAndLast();
}
console.log('\n');
// *** NOTE: HOW CAN I CONSOLE.LOG ANOTHER MESSAGE TO THE CONSOLE 
subtractNewAge();
// print new line
console.log('\n');
//loop to calculate average age
let sum = 0;
// iterate over the ages array. i will be incremented by 1 after each iteration
for(let i = 0; i < ages.length; i++ ) {
    sum += ages[i];
}
// divide sum by the length of the ages array
let averageAge = sum / ages.length;
console.log('Average age is', averageAge);

console.log('\n');



let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let averageNumberOfLetters = () => {
    let sum = 0
    for(let i = 0; i < names.length; i++) {
    sum += names[i].length;
    }
    let averageLettersPerName = sum / names.length;
    console.log('Average letters per name',averageLettersPerName);
}

averageNumberOfLetters();

console.log('\n');


let concatNames = () => {
    for(let i = 0; i < names.length; i++){
        
    }
    // join will join the names array separating each element with a space
    console.log(names.join(' '));
}

concatNames();

console.log('\n');
console.log('How do you access the last element of an array?');
console.log('- By subtracting 1 from the length property');

console.log('\n');
console.log('How do you access the first element of an array?');
console.log('- We access the first element of an array by referring to it as 0 - array[0]');

console.log('\n');

// new empty array
let nameLengths = new Array();

let lengthOfNames = 0;
for(let i = 0; i < names.length; i++){
    // adding the name length to nameLengths array
    nameLengths.push(names[i].length)
    
}
// prining the names array sepearting each element with a comma
console.log(names.join(', ', ' ',));
console.log(nameLengths)

console.log('\n');

let sumOfArr = 0
for(let i = 0; i < nameLengths.length; i++){
    sumOfArr += nameLengths[i];
}

console.log(`Sum of all the elements in the NameLengths Array = ${sumOfArr}`);

console.log('\n');

const myFunction = (word, n) => {
    // initializing times an empty string
    let times = '';
    // iterate over the number of times specified by the n argument 
    for(let i = 0; i < n; i++){
        // add the word to the times variable
        times += word;
    }
    console.log(times);
}

myFunction('Tacos', 3);

console.log('\n');

const nameFunction = (firstName, lastName) => {
    console.log(firstName + " " + lastName);

}
nameFunction('Arturo', 'Eslava');

console.log('\n');

let arrayOfNumbers = [80,100];
const loveFunctions = () => {
    let sum = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++){
       sum += arrayOfNumbers[i];
    }
    // returns true if greater than 100, false if otherwise
   console.log(sum > 100);
}

loveFunctions();

console.log('\n')


let myNumbers = [1,14,8,14,17,14]

const averageNumberInArray = () => {
    let sum = 0;
    for(let i = 0; i < myNumbers.length; i++){
        sum += myNumbers[i];
    }
    let average = sum / myNumbers.length;
    console.log(average);
}

averageNumberInArray();


console.log('\n');

let myNewNumberArray = [90,8];
let myNewNewNumberArray = [15,5];
const myNewFunction = () => {
    let firstSum = 0;
    for(let i = 0; i < myNewNumberArray.length; i++) {
        // add up the elements in the array 
        firstSum += myNewNumberArray[i];
    } 
    let secondSum = 0;
    for(let x = 0; x < myNewNewNumberArray.length; x++){
        secondSum += myNewNewNumberArray[x];
    }
    // sum of all elements divided by how many elemnts are in the array
    let firstAverage = firstSum / myNewNumberArray.length;
    let secondAverage = secondSum / myNewNewNumberArray.length;

    // return true if average of first array is greater than the second
    return firstAverage > secondAverage;

}

console.log(myNewFunction());


console.log('\n');

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if(isHotOutside === true && moneyInPocket >= 10.50){
        return 'We outside and buying a drink'
    } else {
        return 'Another day'
    }
}

console.log(willBuyDrink(true, 20))



console.log('\n')

// This function calculates how old a dog is in human years. I choose to create this function to show off to my girl friend. We have a 2 year old puppy.

const calculateDogAge = (puppysAge) => {
    // some googling to get the conversion rate of 1 human year to 7 dog years
    let dogYears = 7 * puppysAge;
    console.log(`My dog is ${dogYears} years old`)
}

calculateDogAge(2)