/*
Type assertion - затвердження типів, в інших мовах програмування це можуть називати приведення
типів. Задопомогую затвердження типів можна підказати компілятору, конкретний тип яким ми зараз працюємо.
*/

let someData: any = 'Hello world';

/*
твердження, що значення someData є тпом string
використання синтаксису "as"
*/
let stringh1: number = (<string>someData).length;

/*
твердження, що значення someData є типом string
використання синтаксису "as"
*/

let string2: number = (someData as string).length;
