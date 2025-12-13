class person1 {
    name = "person1"
    show(){
        console.log("fun to inherit")
    }
}

class person2 extends person1 {
    name = "person2"
}

let b = new person2();
console.log(b.name)
b.show()
