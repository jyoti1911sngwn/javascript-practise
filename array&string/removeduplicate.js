
// const newArr = [...new Set(arr)]
// console.log(newArr)

// const newArr = arr.filter((val, idx)=>{
    //     return arr.indexOf(val) === idx 
    // })
    // console.log(newArr)
    
    // const uniqueArr = []
    // for(let i = 0 ; i<arr.length ; i++){
        //     if(!uniqueArr.includes(arr[i])){
            //         uniqueArr.push(arr[i])
            //     }
            // }
            // console.log(uniqueArr)
            
const arr = [1,2,2,3,4,5,4]
const newarr =[]
const seen={} 
for( let i = 0 ; i<arr.length; i++){
    if(!seen[arr[i]]){
        seen[arr[i]] = true;
        newarr.push(arr[i])
    }
    
}
console.log(newarr)

