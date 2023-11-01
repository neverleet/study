'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// let obj = {
//     a:5,
//     b:1
// }
// let copy = obj // ссылка на изначальный объект

// copy.a = 10

// console.log(copy)
// console.log(obj)

// function copy (mainObj){
//     let objCopy = {};
    
//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key]
//     }

//     return objCopy
// };

// let numbers ={
//     a:2,
//     b:5,
//     c:{
//         x:7,
//         y:4
//     }
// };

// let newNumbers = copy(numbers); //поверхностная копия объекта, при попытке измениния вложенной структуры меняются два объекта

// newNumbers.c.x = 10;
// newNumbers.a = 10;

// console.log(numbers)
// console.log(newNumbers)

// let add ={
//     d:17,
//     e:20
// }

// console.log(Object.assign(numbers, add)) // объединение двух объектов с помощью Object.assign

// let clone = Object.assign({}, add)

// clone.d = 34

// console.log(clone)
// console.log(add)


// let OldArray = ['a','b','c']
// let newArray = OldArray.slice()

// newArray[1]='изменение'

// console.log(OldArray)
// console.log(newArray)

let video = ['youtube','vimeo','rutube'],
    blogs = ['wordpress','livejournal','blogs'],
    internet = [...video, ...blogs, 'vk', 'insta'] //развернуть данные из video и blogs 
console.log(internet)

function log(a,b,c){
    console.log(a)
    console.log(b)
    console.log(c)
}

const num = [2,5,7]

log(...num) // разложение элемента на три отдельные сущности, удобно использовать при передачи в функцию

let array = ["a","b","c"]

let newArray = [...array] // создание копии массива с помощью разворачивания этого массива

console.log(newArray)

let dannie = {
    one:1,
    two:2
}

let Newdannie = {...dannie}
Newdannie.one = 3
console.log(dannie)
console.log(Newdannie)

