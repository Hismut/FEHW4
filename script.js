//  Составьте программу, которая присваивает переменной d значение 7, а затем выводит на экран: в первой строке - это значение, во второй – квадрат этого значения, в третьей – куб этого значения.

// let d = 7;
// console.log(d);
// console.log(d**2);
// console.log(d**3);

//-----------------------------------------------------------------------------------------------

// Составьте программу, которая принимает с клавиатуры целое число и, если оно положительное, увеличивает его вдвое.
// Программа должна выводить на экран новое значение.

// let num = Number(prompt('Введите число'));
// if(num > 0){
//     console.log(num * 2);
// }
// else{
//     console.log('Число отрицательное или это ноль')
// }

//-----------------------------------------------------------------------------------------------
// Составьте программу, которая принимает с клавиатуры два целых числа и, если первое больше второго, выводит на экран их сумму, если же наоборот – выводит на экран их произведение. В случае же, если числа одинаковы, программа выводит на экран сообщение "числа одинаковые".

// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));

// if(num1 > num2){
//     console.log(num1 + num2);
// }
// else if(num2 > num1){
//     console.log(num2 * num1);
// }
// else if(num1 == num2){
//     console.log('Числа одинаковые')
// }

//----------------------------------------------------------------------------------------------------------------------------------------------
// Составьте программу, которая принимает с клавиатуры целое число и выводит на экран его квадрат – но только в том случае, если введенное число отрицательно.
// В противном случае – на экран выводится сообщение "ошибка".

// let num = Number(prompt('Введите число'));

// if(num < 0){
//     console.log( num **2);
// }
// else{
//     console.log('Ошибка');
// }

//---------------------------------------------------------------------------------------------------------------------------------------------

// Составьте программу, которая принимает с клавиатуры два числа: первое – количество учеников в классе, второе – количество стульев в кабинете.
// Программа проверит соответствие между этими двумя значениями и выведет на экран соответствующую информацию.
// ввод: 24, 28 ⇒ вывод: стульев хватает; ввод: 24, 22 ⇒ вывод: стульев не хватает)

// let students = Number(prompt('Введите количество учеников'));
// let chairs = Number(prompt('Введите количество стульев'));

// if(chairs >= students){
//     console.log('Стульев хватает');
// }
//  else{
//     console.log('Стульев не хватает')
//  }

//----------------------------------------------------------------------------------------------------------------------------------------------

// Составьте программу, которая выводит на экран все однозначные положительные числа в возрастающем порядке.
// Перед началом вывода на экран следует вывести "старт", а после окончания вывода чисел – "финиш".
// вывод: старт, 1, … 9, финиш)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log('Start')
// for( let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log('Finish');

//--------------------------------------------------------------------------------------------------
// Составьте программу, которая выводит на экран все двузначные положительные числа, делящиеся без остатка на 5 (начиная с наименьшего).

// for(let i = 10; i <= 99; i++){
//     if(i % 5 == 0){
//         console.log(i);
//     }
// }

//--------------------------------------------------------------------------------------------------
// Написать цикл, который выводит те числа из массива, которые больше или равны 15.

// let arr = [1, 4, 7, 10, 15, 18, 19, 20];
// for (let i = 0; i < arr.length; i++) {
//     if( arr[i] >= 15){
//         console.log(arr[i]);
//     }
// }

//--------------------------------------------------------------------------------------------------
// Написать цикл, который выводит только нечетные числа

// let arr = [2, 3, 4, 5, 6, 7, 8, 12, 14, 13, 16];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 1){
//         console.log(arr[i]);
//     }
// }

//-------------------------------------------------------------------------------------------------
// Вывести только те значения массива, индекс которых кратен трем.

// let arr = [21, 32, 43, 54, 34, 23, 43, 23, 76, 87];

// for(let i = 0; i <arr.length; i++){
//     if(i %3 == 0){
//         console.log(i);
//     }
// }
