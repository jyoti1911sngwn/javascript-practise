

Array.prototype.snail = function(rowsCount, colsCount) {
   if(this.length !== rowsCount*colsCount) return []
   let index = 0 
   let result = Array.from({length: rowsCount}, ()=> Array(colsCount).fill(0))
   for(let i =0 ;i < colsCount;i++){
    if(i%2 === 0){
        for(let j = 0 ; j < rowsCount; j++){
            result[j][i] = this[index++]
        }
    }else{
        for(let j = rowsCount-1 ; j >= 0; j--){
            result[j][i] = this[index++]
        }
    }
   }
   return result
}

const arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
console.log(arr.snail(5,4)) // [[1,2,3,4]]

// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]