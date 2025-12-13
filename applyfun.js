let person1 = {
    name : "person1" ,
    show(i, j){
        console.log(`${this.name} and ${i} : ${j}`)
    }
}

let person2 = {
    name : "person2",

}

person1.show(22, 'money')
person1.show.apply(person2 , [33, 'mymoney'])