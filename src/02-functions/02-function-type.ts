/*
Під ча створення зміної можн вказати тип данних який визначає сигнатуру функції.
параметри => тип, що повертається
*/

// приймає два параметри типу number повертає значення number
let myAdd: (x: number, y: number) => number;

// Змінною може бути присвоєнофуункцію, яка нічого не приймає і не повертає значень
let myProc: () => void;

function myAddDeclaration(x: number, y: number): number {
    return x + y;
}

myAdd = myAddDeclaration;
console.log(myAdd(10, 20));

myProc = function (): void {
    console.log('Hello world');
};
myProc();
