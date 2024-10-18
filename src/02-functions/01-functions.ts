// звічайна функція
function add1(x: number, y: number) {
    return x + y;
}

const result1 = add1(1, 2);
console.log(result1);

// Типізація функцій. Приймає два аргументи типу number та повертає значення типу number
function add2(x: number, y: number): number {
    return x + y;
}

const result2: number = add2(10, 20);
// const result2: number = add2(10); // очікується два парметри
// const result2: number = add2(10, "text"); // другий аргумент
// const result2: string = add2(10, 20); // результат роботи функції не може бути наданий рядковую
console.log(result2);
