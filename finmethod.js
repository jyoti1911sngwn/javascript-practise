let arr = [1,2,3,4]
let v= arr.find((v)=> {return v=2 })
console.log(v)
let i = arr.findIndex((v)=> {return v>3})
console.log(i)
let vmax= arr.find((v)=> {return v>2 })
console.log(vmax)
let max= arr.filter((v)=> {return v>2 })
console.log(max)