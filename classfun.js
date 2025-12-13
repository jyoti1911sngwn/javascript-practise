class person {
    name = "person1" ;
    age =(a)=>{
        return a; 
    }
}

let obj1 = new person()
let obj2 = new person()

console.log(`${obj1.name} and age is ${obj1.age(22)}`)
console.log(`${obj2.name} and age is ${obj2.age(33)}`)

console.log(typeof obj1)