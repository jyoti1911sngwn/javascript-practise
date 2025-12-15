const arr = [1,2,3,4,4,3]

let count = {}

for( let i =0 ; i<arr.length ; i++){
    const char = arr[i];
    if(count[char]){
        count[char] += 1
    }
    else{
        count[char] = 1
    }
}

console.log(count)