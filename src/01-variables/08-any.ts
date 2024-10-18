/*
При створенні зміної тип якої невідомий під час написання программи
можна використутвати тип данних any.
    Такий тип зручно застосовувати в ситуаціях,
коли значення вводиться користувачем виходить у результаті роботи іншої бібліотеки.
Такий тип данних не проходить перевірку в результаті компіляції.
*/

let someValue: any = 'Hello world'; // string
someValue = false; // boolean
someValue = 100; // number
console.log(someValue); // 100

// ok
someValue.toFixed();

/*
Помилка на єтапі віконання
TypeError: someValue.toFixed is not a Function
*/

// someValue = 'test';
// someValue.toFixed();
