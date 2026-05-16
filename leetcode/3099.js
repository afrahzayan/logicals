function harshed(num) {
    let sum=0
    let number = num
    

    while (number>0) {
        let add= number % 10
         sum += add
         number = Math.floor(number/10)        
    }

      if( num % sum === 0){
        return sum
        
      }else{
        return -1
      }

    
}
// console.log(harshed(18));
console.log(harshed(23));
// console.log(harshed(28));
