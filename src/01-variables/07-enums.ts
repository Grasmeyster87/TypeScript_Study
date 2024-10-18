// enum - перелік, типданних, який дозволяє
// набору цілих значень задати імена.
// За замовчанням перерахування нумерують
// свої елементи починаючи з 0

// Red = 0, green = 1, Blue = 2
enum Color {
    Red,
    Green,
    Blue,
}

const c1: Color = Color.Green;
console.log(c1);

// кожному елементу перерахування явно встановлює значення

enum Status {
    Success = 1,
    Error = 5,
    Rejected = 10,
}
const c2: Status = Status.Success;
console.log(c2);

/*
Оскільки першому елементу явно встановлено значення 2, всі наступні продовжують нумерацію з 2
Circle = 2, Triangle = 3, Square = 4
*/

enum Shape {
    Circle = 'circle',
    Triangle = 'triangle',
    Square = 'squar',
}

const c3: Shape = Shape.Square;
console.log(c3);

const c4: string = Status[1];
console.log(c4);

//////////////////////////////////////////////////////////////////
// Приклад використання перерахувань
//////////////////////////////////////////////////////////////////

function drawImage1(fruit: number) {
    const domElement: HTMLImageElement = document.createElement('img');
    switch (fruit) {
        case 0:
            domElement.src = '/images/apple.jpg';
            break;
        case 1:
            domElement.src = '/images/orange.jpg';
            break;
        case 2:
            domElement.src = '/images/tomato.jpg';
            break;
    }
    document.body.appendChild(domElement);
}

drawImage1(1); // створити зображення з яблуком ( не очевидно)

enum Fruit {
    Apple,
    Orange,
    Tomato,
}

function drawImage2(fruit: Fruit) {
    const domElement: HTMLImageElement = document.createElement('img');

    switch (fruit) {
        case Fruit.Apple:
            domElement.src = '/images/apple.jpg';
            break;
        case Fruit.Orange:
            domElement.src = '/images/orange.jpg';
            break;
        case Fruit.Tomato:
            domElement.src = '/images/tomato.jpg';
            break;
    }
}
drawImage1(Fruit.Apple);
