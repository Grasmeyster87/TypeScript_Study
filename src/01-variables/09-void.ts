/*
Тип данних void - тип даних що вказує навідсутність будь якого значення.
Використовується для того, щоб при визначенні функція
явно вказати на відсутність значення, що повертається.
*/

function myProcedure(): void {
    alert('hello');
}
myProcedure();
/*
тип void може використовувати значення змінни, 
але такій змінній можна присвоїти лише значення undefined чи null
*/

let someVoidValue: void = undefined;
someVoidValue = null;

const u: undefined = undefined; // змінна типу undefined
const n: null = null; // змінна типу null

// за замовчанням значення типу null i undefined можуть
// бути присвоєні будь яклму іншому типу даних

let testNumber: number = undefined;
