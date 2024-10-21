function repeatOperation(count: number, callback: () => void): void {
    console.log('start');
    for (let i = 0; i < count; i++) {
        callback();
        /*
        Контейст цієї функції - глобальний обект.
        Якщо в функції callback використовується контекст, він теж буде посилатися на глобальний об'єкт/
        */
    }
    console.log('stop');
}

const setting = {
    displayName: 'test object',
    test1() {
        // const self = this;
        // в данному випадку this вказує на об'єкт settings
        repeatOperation(
            3,
            function () {
                console.log(this.displayName); // console.log(self.displayName);
            }.bind(this)
        ); // предача контекста в функцію
    },

    test2() {
        // стрілочна функція захоплює контекст, у якому була створена
        repeatOperation(3, () => console.log(this.displayName));
    },
};

setting.test1();
setting.test2();
