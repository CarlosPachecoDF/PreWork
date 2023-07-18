function calculateSum(num1 : number, num2: number) : number{
    return num1 + num2;
} 

const res1 = calculateSum(5, 2);
const res2 = calculateSum(3, 7);
const res3 = calculateSum(-3, 5.1);

console.log(res1);
console.log(res2);
console.log(res3);

function isEven(num : number) : boolean{
    return num % 2 === 0;
};

const res1IsEven = isEven(res1);
const res2IsEven = isEven(res2);
const res3IsEven = isEven(res3);

console.log(res1IsEven);
console.log(res2IsEven);
console.log(res3IsEven);

function reverseString(str : String) : String {
    let resultString = "";
    for (let index = str.length -1; index >= 0; index--) {
         resultString = resultString.concat(str.charAt(index))
    }
    return resultString;
}

const reverse1 = reverseString("Hola mundo");
const reverse2 = reverseString("Digital Femsa");
const reverse3 = reverseString("React Native");

console.log(reverse1);
console.log(reverse2);
console.log(reverse3);

const calculateAverage = (nums : number[]) => {
    let sum : number = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum / nums.length;
}

const average1 = calculateAverage([5, 8, 6, 5]);
const average2 = calculateAverage([10, 9, 5, 2]);
const average3 = calculateAverage([6, 5, 5, 8, 9, 10]);

console.log(average1);
console.log(average2);
console.log(average3);

type MathOperation = (num1 : number, num2 : number) => number

var multiply : MathOperation = (num1, num2) => {
    return num1 * num2;
}

const multiplication1 = multiply(3, 65);
const multiplication2 = multiply(5, 12);
const multiplication3 = multiply(3, 2);

console.log(multiplication1);
console.log(multiplication2);
console.log(multiplication3)
