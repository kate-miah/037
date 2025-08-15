const array = {
    0: 4323232,
    1: 'value',
    2: true,
    3: 236589,
    length: 4,
}

//const nativeArray = new Array();
// или 
//const natArray1 = []; // сокращенный вариант - синтаксический сахар

const nativeArray = [3, 2, 1, 4];

const getArray = [5, 4, 8, 2, 1];
for (let i = 0; i < getArray.length; i++) {
    console.log(getArray[i]);
}

function getSumOfArray(array) {
 let sum = 0;
 for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') {
        sum += array[i]
    }
 }
 return sum;
}

// Таска 1. Даний масив. Написати функцію, яка знаходить нацбільше число значення в масиві. 

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] > max) {
            max = array[i]
        }
    }
    return max;
}

// Таска 2. Написати функцію, яка знаходить найменьшн число в масиві.

function getMin (array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i]
        }
    }
    return min;
}

// Знайти середне аріфметичне числових елементів масива

function getSum(array) {
 let sum = 0;
 for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === 'number') {
        sum += array[i]
    }
 }
 return sum / array.length;
}
