class person {
    static name = "abc"
    constructor(na){
        this.name = na
    }
    address(ad){
        this.add = ad
    }
    details(){
        console.log(`name : ${this.name} and address: ${this.add}`)
    }
}

let p1 = new person("name");
p1.address("22@home")
p1.details()
console.log(person.name)
person.name= "new name"
console.log(person.name)
p1.name = "diff name"
console.log(p1.name)

//static : This property/method belongs to the class itself, NOT to its objects.