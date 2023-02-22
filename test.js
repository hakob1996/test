//IMPORTANT!!!
//in arrow functions(ES6) 'THIS' is getting a value of 'THIS' from it's scope

// function sayTheParam (){
//     console.log(this.name)
// }

// let a = {
//     name: Hakob,
//     last: Muradyan 
// }
// a.sayTheParam()

// for(var i=0; i<2; i++){
//     var arrF = () =>{
//         console.log(this)
//     }
// }


// function matrix (x, y){
//     let result = ''
//     for (var i=0; i<y; i++){
//         let row = ''
//         for (let j=0; j<x; j++){
//             row += '*'
//         }
//         result += row + '\n'
//     }
//     console.log(result)
// }

// matrix(3, 4)


// var human1 = new People(John, Roberts);
// function matrix (x){
//     let result = ''
//     for (var i=0; i<x; i++){
//         let row = ''
//         for (let j=0; j<x; j++){
//             row += '*'        }
//         result += row + '\n'
//     }
//     console.log(result)
// }

// matrix(10)




// console.log(human1)

//filter custom
// var arr = [1,2,3,4,5]
// var newArr = []
// Array.prototype.myFilter = function(f){
//     for (var i=0; i<this.length; i++){
//         if(f(this[i]) === true){
//             newArr.push(this[i])
//         }
//     }
//     return newArr
// }
// console.log(arr.myFilter(el => el%2 == 0))

// var arr = [1,2,3,4,5]
// var newArr = []
// var astx = '*'
// arr.map(function(el){
//     for (var i=0; i<el; i++){
//         newArr.push(astx)
//     }
//     return newArr
// })

// var newArr = []
// Array.prototype.myMap = function(f){
//     for (var i=0; i<this.length; i++){
//             newArr.push(f(this[i]))
//     }
//     return newArr
// }
// console.log(arr.myMap(el => el%2 == 0))

//homework 3 N5 another solution
// function fn(arr) {
//     const count = {};
//     arr.forEach(function (i) {
//       count[i] = (count[i] || 0) + 1;
//     });
//     for (let key in count) {
//       count[key] = count[key] / arr.length;
//     }
//     console.log(count);
//   }
//   fn([1, 1, 2, 2, 3]);
//   fn([4, 4]);
// version2
// const array=[1,1,2,2,3];
// function frequency(arr){

//     let obj={};
//     for (let i=0;i<arr.length;i++) {
//         let freq=1;
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j] && i!==j ){
//                 freq=freq+1;
//                 obj[arr[i]]=`${freq/arr.length}`;
//             }
//             obj[arr[i]]=`${freq/arr.length}`;

//         }

//     } return obj;
// }

// console.log(frequency(array));

// var arr = [1,2,3,4,5]
// Array.prototype.mySome = function(f){
//     for (var i=0; i<this.length; i++){
//         if(f(this[i]) == true){
//             return true
//         }
//     }
//         return false

// }
// console.log(arr.mySome())

// let arr = [1,4,5,7,34,6,3,5,6,7,8,45,2,34,232,21]
// let temp;


// function bubble(arr){
//     for(let i =0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]>arr[j]){
//                 temp = arr[i]
//                 arr[j] = arr[i]
//                 arr[i] = temp
//             }
//         }
//     }
//     console.log(arr)
// }

// bubble(arr)


// o = {
//     start: 97,
//     end: 100
// }

// o[Symbol.iterator] = function () {
//     const iterator = {
//         currentCharCode: this.start,
//         endCharCode: this.end,
//         next: function(){
//             const iterationResult = {
//                 value: String.fromCharCode(this.currentCharCode),
//                 done: this.currentCharCode > this.endCharCode ? true : false
//             }
//             this.currentCharCode++
//             return iterationResult
//         }
//     }
//     return iterator
// }



// function People(name, gender, age, height){
//     this.name = name
//     this.gender = gender
//     this.age = age
//     this.height = height
//   }
//   let arr = [
//     new People('GOR', "male", 20, 171),
//     new People('HAYK', 'male', 7, 144),
//     new People('Kim', 'male', 10, 160),
//     new People('Ani', 'female', 30, 180),
//     new People('Ara', 'male', 11, 150),
//     new People("Lusine","female",28,174)
//     ]

//     // function organize(){
//         let newArr = []
        // for(let i=0; i<arr.length; i++){
        //     if(arr[i].gender == 'male' && arr[i].name.toUpperCase() == arr[i].name){
        //         newArr.push(arr[i])
        //     }
        // }
        // newArr.sort(function(a,b){
        //     if(a.height > b.height){
        //         return 1
        //     }else{
        //         return -1
        //     }
        // })
        // console.log(newArr)
        // })

        // arr.filter(function(el){
        //     if(el.gender == 'male'){
        //         newArr.push(el)
        //     }

        // })
        // newArr.sort(function(a,b){
        //     if(a.height > b.height){
        //         return 1
        //     }else{
        //         return -1
        //     }
        // })
        // newArr.map(function(el){
        //     el.name = el.name.toUpperCase()
        // })
        // console.log(newArr)
        // let arr = [1,2,3,4,5]
        // function arrR(n,i=0){
            
        //     if(n.length === i){
        //         return
        //     }
        //     console.log(n[i])
        //     i++
        //     arrR(n,i)
            
        // }

        // arrR(arr)

    //     let obj = {
    //         a:1,
    //         b:2,
    //         c:{
    //             a:1,
    //             b:2,
    //             c:{
    //                 a:1,
    //                 b:2
    //             }

    //         }
    //     }

        
    //     function rec(obj){
    //     const cloneObj = {}
    //     for(let key in obj){
    //         cloneObj[key] = obj[key]
    //         if(typeof obj[key] == 'object'){
    //            cloneObj[key] = rec(obj[key])
               
    //         }
    //     }
    //     return cloneObj
    
    // }
    // console.log(rec(obj))
    

    // function flattenMultidimensionalArray(arr, flattenArr = [], i = 0) {
    //     if (i !== arr.length) {
    //         if (Array.isArray(arr[i])) {
    //             flattenMultidimensionalArray(arr[i], flattenArr, 0)
    //         } else {
    //             flattenArr.push(arr[i])
    //         }
    //         i++;
    //         flattenMultidimensionalArray(arr, flattenArr, i);
    //     }
    
    //     return flattenArr;
    // }
    
    // console.log(flattenMultidimensionalArray([14, [1, [[[3, []]], 1], 0], 17]));


    // function sumDigits(number, i = 0) {
    //     let result = 0;
    //     let newNum = number.toString().split('')
    //     if(number/10 >=1 && i<newNum.length){
    //             result+= newNum[i]/1
    //             verjnakan = result
    //             i++
    //             sumDigits(verjnakan, i++)

    //     }
    //     return verjnakan
    // }
    
  
    
    // console.log(sumDigits(32));

    // let arr = [1,2,3,4,5]
    // let newArr = []

    // var a = arr.reduce(function(total, i){
    //     newArr.push( i)
    //     return newArr
    // }, 0)

    // console.log(a)


//     function stop (n){
//     let a = 0
//     let interval = setInterval(function(){
//         console.log(a++)
//         if(n==a){
//             clearInterval(interval)
//      }
     
//     },1000)
// }

// stop(10)

// var array =[1,4,67,8,3,45,23,46,78];

// function myMerge(arr){
//     if(arr.length <2){
//         return arr
//     }
//     let middle = Math.floor(arr.length / 2);
//     let left = myMerge(arr.slice(0,middle))
//     let right = myMerge(arr.slice(middle))
//     return left, right
  
// }
// console.log(myMerge(array))

// function a (a, b){
//     console.log(a + b)
// }
// function b (a, b){
//     console.log(a - b)
// }
// function c (a, b){
//     console.log(a * b)
// }
// function decoratorCount(f) {
//     return function(callCount = 0){
//         return f(), callCount++
//     }
// }
// const decoratedA = decoratorCount(a)
// const decoratedB = decoratorCount(b)
// const decoratedC = decoratorCount(c)
// decoratedA(5, 6) // 11
// decoratedA(2, 4) // 6
// decoratedB(10, 8) // 2
// decoratedB(10, 4) // 6
// decoratedB(10, 5) // 5
// decoratedC(10, 8) // 80
// decoratedA.callCount // 2
// decoratedB.callCount // 3
// decoratedC.callCount // 1
// decoratedC(5, 8) // 40
// decoratedC.callCount // 2
// function a (x, y) {
//     console.log(x + y)
// }
// function decoratorCount(f) {
//     return function(x,y){
//         return f()
//     }
// }
//     newF.callCount = 0
//     return newF
// }
// var btn = document.getElementById('btn')
// var par = document.getElementById('par')
// var input = document.getElementById('input1')

// function f(x) {
//     console.log(x);
//   }

//   function delay(f, ms){
//       function decorated(f, ...args){
//           decorated.call(f, args)
//           return this.args
//       }
//       return setTimeout(decorated(f()), ms/1)
//   }
  
  // create wrappers
//   let f1000 = delay(f, 1000);
//   let f1500 = delay(f, 1500);
  
//   f1000("test"); // shows "test" after 1000ms
//   f1500("test"); // shows "test" after 1500ms



//PROTOTYPES
// function Person(name, surname, gender) {
//     // this = {}
//     // Object.setPrototypeOf(this, Person.prototype)
//     debugger
// 	this.name = name;
// 	this.surname = surname;
// 	this.gender = gender;
// 	this.isWalking = false;
// 	this.age = 0;
//     // return this
// }
// Person.prototype.go = function () {
// 	this.isWalking = true
// }
// Person.prototype.stop = function () {
// 	this.isWalking = false
// }
// function Women(name, surname) {
//     // this = {}
//     // Object.setPrototypeOf(this, Women.prototype)
//     debugger
//     Person.call(this, name, surname, 'female')
//     // this.gender = 'female';
//     // return this
// }
// Women.prototype.doYouWantAnything = function () {
//     return 'yes'
// }
// Women.prototype.whatYouWant = function () {
//     return 'asdas dnaisjd haiosdh'
// }
// Women.prototype.__proto__= Person.prototype

// Create a Rectangle class. Rectangle should have: length and width.
// It should have getters and setters for all fields.
// It should have getArea() method.
// It should have getPerimeter() method.
// It should have toString() method.

// function Rectangle(length, width){
//   Object.defineProperties(this,{
//     width:{
      
//       enumerable: true,
//       configurable:true,
//       get (){
//         return this._width
//       },
//       set (val){
//         return this._width = val
//       }
//     },
//     length:{
      
//       enumerable: true,
//       configurable:true,
//       get (){
//         return this._length
//       },
//       set (val){
//         return this._length = val
//       }
//     }
//   })
//   this.length = length
//   this.width = width
// }

// Rectangle.prototype.getArea = function(){
//    let area = this.length * this.width
//    return area;
// }

// Rectangle.prototype.getPerimeter = function(){
//   let perimeter = (this.length * 2) + (this.width * 2)
//   return perimeter
// }

// Rectangle.prototype.toString = function(){
//   return toString(this.length + this.width)
// }




// class Rectangle{
//   constructor(length, width){
//     this.length = length
//     this.width = width
//   }
//   getPerimeter(){
//     let perimeter = (this.length * 2) + (this.width * 2)
//     return perimeter
//   }
//   toString(){
//     return toString(this.length + this.width)
//   }
//   getArea(){
//     let area = this.length * this.width
//     return area
//   }
//   get(){
//     return this._length
//   }
//   set(val){
//     this._length = val
//   }
// }

// Create an Employee class. Employee should have: id, firstName, lastName, position, salary, workingHours.
// It should have setters and getters for appropriate fields.
// It should have a method: getFullName().
// It should have a method: getAnnularSalary() which should be the total salary of the employee within a year.
// It should have a method: raiseSalary(percent), which increases the salary by the given percent and returns new salary.

// function Employee(id, firstName, lastName, position, salary, workingHours){
//     Object.defineProperties(this,{
//     firstName:{
//       enumerable: true,
//       configurable:true,
//       get (){
//         return this._firstName
//       },
//       set (val){
//         return this._firstName = val
//       }
//     },
//     lastName:{
//       enumerable: true,
//       configurable:true,
//       get (){
//         return this._lastName
//       },
//       set (val){
//         return this._lastName = val
//       }
//     },
//     position:{
//       enumerable: true,
//       configurable:true,
//       get (){
//         return this._position
//       },
//       set (val){
//         return this._position = val
//       }
//     },
//   })

//   this.id = id
//   this.firstName = firstName
//   this.lastName = lastame
//   this.position = position
//   this.salary = salary
//   this.workingHours = workingHours
// }

// Employee.prototype.FullName = function(){
//  let fullName =  `${this.firstName} + ${this.lastName}`
//  return fullName
// }

// Employee.prototype.getAnnularSalary = function(){
//   let salary = this.salary * 12
//   return salary
// }

// Employee.prototype.raiseSalary = function(x){
//   return this.salary += this.salary * x / 100
// }


// class Employee{
//   constructor(id, firstName, lastName, position, salary, workingHours){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.position = position
//     this.salary = salary
//     this.workingHours = workingHours
//     this.id = id
//   }
//   get(){
//     return this._firstname
//   }
//   set(val){
//     return this._firstname = val
//   }
//   fullName(){
//     return this.firstName + this.lastName
//   }
//   getAnnularSalary(){
//     return this.salary * 12
//   }
//   raiseSalary(x){
//     return this.salary += this.salary * x / 100
//   }

// }

//ERROR FIRST callback
// function loadScript(src, callback) {
//   const newScript = document.createElement("script");
//   newScript.src = src;
//   document.body.append(newScript);
//   newScript.onload = function (e) {
//     const data = { e, newScript };
//     callback(null, data);
//   };
//   newScript.onerror = function (e) {
//     callback(new Error("can't load script"));
//   };
// }
// loadScript("script1.js", function (error, data) {
//   if (error) {
//     console.log(error.message);
//   } else {
//     fnInScript1Js111111();
//     const srcOfSecondScript = getSrcOfSecondScript();
//     loadScript(srcOfSecondScript, function (data) {
//       fnInScript2Js2222222();
//     });
//   }
// });


// PROMISES WITH THEN
// const container = document.querySelector(".container");
// let countLoad = 0;
// function loadImg(src) {
//   return new Promise(function (resolve) {
//     let img = document.createElement("img");
//     img.addEventListener("load", () => {
//       resolve();
//     });
//     img.classList.add("passive");
//     img.src = src;
//     container.append(img);
//   });
// }
// fetch("https://dog.ceo/api/breeds/list/all")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     const [breed, subBreeds] = Object.entries(data.message).reduce(
//       (res, item) => {
//         return res[1].length > item[1].length ? res : item;
//       }
//     );
//     return fetch(`https://dog.ceo/api/breed/${breed}/${subBreeds[1]}/images`);
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     const imgProm = []
//     for (let i = 0; i < 7; i++) {
//       imgProm.push(loadImg(data.message[48+i]))
//     }
//    return Promise.all(imgProm)
 
//   })
//   .then(function(){
//     const imgs = document.querySelectorAll("img");
//     Array.from(imgs).forEach((item) => item.classList.remove("passive"));
//   })
//   .catch(function (e) {
//     console.log(e.message);
//   });


// PROMISES WITH ASYNC AWAIT

// const response = await fetch("https://dog.ceo/api/breeds/list/all");
//   const data = await response.json();
//   const [breed, subBreeds] = Object.entries(data.message).reduce(
//     (res, item) => {
//       return res[1].length > item[1].length ? res : item;
//     }
//   );
//   const response1 = await fetch(
//     `https://dog.ceo/api/breed/${breed}/${subBreeds[1]}/images`
//   );
//   const data1 = await response1.json();
//   const imgProm = [];
//   for (let i = 0; i < 7; i++) {
//     imgProm.push(loadImg(data1.message[64 + i]));
//   }
//   await Promise.all(imgProm);
//   const imgs = document.querySelectorAll("img");
//   Array.from(imgs).forEach((item) => item.classList.remove("passive"));


// const canvas = document.getElementById("tetris");
// const context = canvas.getContext("2d");

// context.scale(20, 20);

// const matrix = [
//   [0, 0, 0],
//   [1, 1, 1],
//   [0, 1, 0],
// ];

// function collide(arena, player) {
//   const m = player.matrix;
//   const o = player.pos;
//   for (let y = 0; y < m.length; ++y) {
//     for (let x = 0; x < m[y].length; ++x) {
//       if (m[y][x] !== 0 && (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function createMatrix(w, h) {
//   const matrix = [];
//   while (h--) {
//     matrix.push(new Array(w).fill(0));
//   }
//   return matrix;
// }

// function drawMatrix(matrix, offset) {
//   matrix.forEach((row, y) => {
//     row.forEach((value, x) => {
//       if (value !== 0) {
//         context.fillStyle = "red";
//         context.fillRect(x + offset.x, y + offset.y, 1, 1);
//       }
//     });
//   });
// }

// function draw() {
//   context.fillStyle = "#000";
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   drawMatrix(arena, { x: 0, y: 0 });
//   drawMatrix(player.matrix, player.pos);
// }

// function merge(arena, player) {
//   player.matrix.forEach((row, y) => {
//     row.forEach((value, x) => {
//       if (value !== 0) {
//         arena[y + player.pos.y][x + player.pos.x] = value;
//       }
//     });
//   });
// }

// function playerDrop() {
//   player.pos.y++;
//   if (collide(arena, player)) {
//     player.pos.y--;
//     merge(arena, player);
//     player.pos.y = 0;
//   }
//   dropCounter = 0;
// }

// let dropCounter = 0;
// let dropInterval = 1000;

// let lastTime = 0;
// function update(time = 0) {
//   const deltaTime = time - lastTime;
//   dropCounter += deltaTime;
//   if (dropCounter > dropInterval) {
//     playerDrop();
//   }
//   lastTime = time;
// }
//   draw();


// function* fibonaciGen(){
//   let current = 0;
//   let next = 1;
//   while(1>0){
//     let result = current + next;
//     current = next;
//     next = result;
//     yield result;
//   }
// }


// promise Emplementation 
// function MyPromise(executor) {
//   this.state = "pending";
//   this.result;
//   let fulfilled;
//   let rejected;
//   this.then = function (onFulfilled, onRejected) {
//     fulfilled = onFulfilled;
//     rejected = onRejected;
//     return this;
//   };
//   this.catch = function (onRejected) {
//     if (rejected) {
//       rejected();
//       this.state = "rejected";
//     }
//   };
//   const res = (value) => {
//     if (fulfilled) {
//       // promisi statey piti darna fullfiled
//       fulfilled(value);
//       this.result = value;
//       this.state = "fulfilled";
//     }
//   };
//   const rej = (error) => {
//     // yes imamum em, vor reject@ kanchvel a
//     if (rejected) {
//       rejected();
//       this.state = "rejected";
//     }
//   };
//   executor(res, rej);
// }
// const p = new MyPromise((res, rej) => {
//   setTimeout(() => {
//     res(1);
//   }, 2000);
// });
// p.then((d) => console.log(d)).catch((e) => console.log(e));

console.log(7)