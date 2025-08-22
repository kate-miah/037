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

// Методи масива

const arr = [5, 4, 3, 2, 1]; // === new Array()

// Метод at(index) - поевертає значення з масива за вказанним індексом

arr[3] === arr.at[3];

// Метод push(value) - приймає значення і кладе його наступним елементом  масиву. Повертає новий lenght

arr.push[8];

// Метод pop() - видаляє останній елемент масиву та повертає його начення

arr.pop();

// Метод shift() - видаляє перший елемент  та повертає його значення, сдвигає всі елементи на один вперед

arr.shift();


// Метод unshift() - вставляє 1 або більше елементів на початок, всі елементи здвигаються назад, повертає новий lenght

arr.unshift(10);


const arr1 = [2, 3, 4];
const arr2 = [5, 6, 7];

// Метод .concat() об'єднає два масива

const arr3 = arr1.concat(arr2);

// Метод .inclused(value) - повертає ture, якщо valu присутнє в масиві і false якщо ні

arr3.includes(5) // true
arr3.includes(9) // false

// Метод indexOf(value) повертає індекс елементу, якщо він такий в масиві є ш -1,якщо такого елементу в масиві нема

arr3.indexOf(5) // 5
arr3.indexOf(0) // -1

//

function getIndexOf(value, array) {
    let index = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return index;
}
 // Метод .reverse() повертає масиа хадом-наперед. Муту початковий об'єкт

 const arr5 = [9, 8, 7, 6, 5, 4, 3];
 arr5.reverse() // перевернула масив


 function myReverse(array) {
    // створити новий масив
    const newArr = [];
    // записуємо в нього всі елементи початкового, в зворотньому порядку
    for (let i = array.length -1; i >=0; i--) {
        newArr.push(array[i]);
    }
    return newArr
    // повертаємо новий масив
 }

 // Метод .splice(початковий індекс, кількість елементв) - мутує початковий масив, починаючи з  вказаного індексу виділяє кількість елементівюповертає внаслідок поботи міні-масив, о містить видалені елементи

 arr.splice(3, 1, 44, 33) //починаючи з 3 індекса видалить один елементи і вставить два - число 44 і 33

 // Метод .slice(start, end) -  повертає новий масив, що містить копію частини попереднього
 // елемент з індекслм start попадає в результат , end - ні
 // якщо аргумент end опущено (метод викликали з олним аргументом) - це означає від start і до кінця масиву)

 arr.slice(2,5) // з 2го до 5го (не включно)
 arr.slice(4) // від 4го до кінця


 /// Task

 // 1
 const newArr = [1, 2, 3];
 const newArr1 = [4, 5, 6];
 const newArr2 = newArr.concat(newArr1);
 //2
 const newArr3 = [6, 5, 4];
 newArr3.reverse();
 //3
 const newArr4 = [1, 2, 3];

 //4 
 const newArr5 = [7, 8, 9];
 newArr5.unshift(1, 2, 3);
 //5
 const newArr6 = ['aaa', 'bbb', 'ccc'];
 console.log(newArr6.shift());
 //6 
 const newArr7 = ['aaa', 'bbb', 'ccc'];
 console.log(newArr7.pop());
 //7 
 const newArr8 = [9, 10, 11, 12, 13];
 newArr8.slice(2, 5);
 //8 
 const newArr9 = [1, 2, 3, 4, 5];
 newArr9.splice(3, 2);
 //9
 const newArr10 = [1, 2, 3, 4, 5];
 newArr10.slice(3);
 //10
  const newArr11 = [1, 2, 3, 4, 5];
  newArr11.splice(1, 0, 'w', 'trtr');
  newArr11.splice(6, 1, 'vvv', 'a', 'hello');

/*Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку

function countVovels(str, vovelsArray)

vovelsArray = [a, e, i, o, u, y]

'hello to you' //6

'lorem ipsum dolor sit amet' // 9
*/
const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'y'];
function countVowels(str, vowelsArray) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsArray.includes(str[i])) {
        count++;
        }
    }
    return count;
    }

console.log(countVowels('hello to you', vowelsArray));
console.log(countVowels('lorem ipsum dolor sit amet', vowelsArray));
console.log(countVowels('There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain', vowelsArray));
console.log(countVowels('Hello to You', vowelsArray));
