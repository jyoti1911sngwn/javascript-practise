let person1 = {
    name : "person1"
}
let person3 ={
    name : "person3"
}

let person2 = {
    name : "person2",
    show(i){
        console.log(this.name, i);
    }
}

person2.show(10);   

let obj1 = person2.show.bind(person2);   
let obj2 = person2.show.bind(person1);   
let obj3 = person2.show.bind(person3);
obj3(33);
obj1(20);   
obj2(30);  
console.log(typeof obj3)
