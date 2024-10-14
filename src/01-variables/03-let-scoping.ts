function let1() {
    // console.log(i); // Cannot find name 'i'
    // console.log(test); // Cannot find name 'test'

    for (let i = 0; i < 10; i++) {
        let test = i;
    }
    // console.log(i); // Cannot find name 'i'
    // console.log(test); // Cannot find name 'test'
}

let1();

//  Повторне визначення змунної не призводить до помилки
function let2() {
    let a = 10;
    // Cannot redeclate block-scoped veriable 'a'
    // let  a = 20;
    console.log(a);
}

 //let2();

// 0, 1, 2, 3, 4

function let3() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    }
}

//let3()
