// var a = 10
// function b (){
//     var x= 10
// }
// console.log(a);
// console.log(this.a);
// console.log(window.a);

// function a(){
//     b();
//     function b(){
//         console.log(c)
//     }
// }
// var c = 10;
// a()

// var a = 10
// let b = 20
// console.log(window.a);
// console.log(window.b);

// console.log(Number("989a"))

// function a(){
//     c= 10
//     function b(){
//         console.log(`valur is ${c}`)
//     }
//     b()
// }

// a()

// var x = 10;
// let y = 20;

// function test() {
//   console.log(x);
//   console.log(y);
//   var x = 1;
//   let y = 2;
// }
// test();

// let i = "outer";

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 5000);
// }

// function a() {
//   let i = 10;
//      return function() {
//          console.log(i);
//          i++
//     }
// }

// const fun = a()
// fun()
// fun()
// fun()

// function createFunctions() {
//   var funcs = [];
//   for (var i = 0; i < 3; i++) {
//     funcs.push(function() {
//       console.log(i);
//     });
//   }
//   return funcs;
// }

// const fns = createFunctions();
// fns[0](); // ?
// fns[1](); // ?
// fns[2](); // ?


// function outer() {
//   let x = 10;
  
//   function middle() {
//     let x = 20;
    
//     function inner() {
//       console.log(x);
//     }
    
//     return inner;
//   }
  
//   return middle();
// }

// const fn = outer();
// fn();

// function test() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//   }

//   console.log(a);
//   console.log(b);
// }
// test();

// var x = 5;
// function foo() {
//   console.log(x);
//   var x = 10;
// }
// foo();

// let x = 1;

// function test() {
//   console.log(x);
//   let x = 2;
// }
// test();

// const obj = {
//   name: "Jyoti",
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   },
// };

// obj.normal();
// obj.arrow();

// function test() {
//   console.log(this);
// }
// test();

// const obj = {
//   name: "A",
//   getName(){
//     return this.name;
//   },
// };

// console.log(obj.getName());

// const fn1 = obj.getName();
// console.log(fn1);

// const fn = obj.getName.bind(obj);
// console.log(fn());


// const obj = {
//   name: "Jyoti",
//   greet() {
//     setTimeout(function () {
//       console.log(this);
//     }, 100);
//   },
// };

// obj.greet();






