let person1 ={
    name : "person1" ,
    show(i){
        console.log(`${this.name} and ${i}`);
    }
}

let  person2 ={
    name : "person2"
}

person1.show(22);
person1.show.call(person2 , 33)