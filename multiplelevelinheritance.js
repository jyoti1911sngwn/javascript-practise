class person1 {
    show(){
        console.log("function to inherit")
    }
}

class person2 extends person1{

}

class person3 extends person2{

}

let p = new person1();
p.show()