const calculateAverage = function (numbers){
    const average = numbers.reduce((total, n) => total + n)/numbers.length;
    return average;
}

let grades = [1, 2, 3, 4, 5];
calculateAverage(grades);
const result = calculateAverage(grades);
console.log(result);

let ages = [10, 20, 33, 44, 45];
const result2 = calculateAverage(ages);
console.log(result2);