'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log((str))
// console.log((strObj))

let solider = {
    health:400,
    armor:100,
    sayHello:function() {
        console.log('Hello')
    }
};

let john = Object.create(solider);

// let john = {
//     health:100
// };

// john.__proto__ = solider; // устаревший способ взятия данных из прототипа

// Object.setPrototypeOf(john,solider) // запись, идентичная верхней



john.sayHello()