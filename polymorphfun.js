class parent {
    show(){
        console.log("i am parent ")
    }
}

class child extends parent {
    show(){
        console.log("i am child")
    }
}

let p1 = new parent()
let p2 = new child()

p1.show()
p2.show()