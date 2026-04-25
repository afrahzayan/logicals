function isSorted(num) {

    let number = num.toString()
    let sorted =

    for(let i = 0 ; i<= number.length-1 ; i++){
        if(number[i] > number[i+1]){
              

        }else if(number[i] < number[i+1]){
            return "false"
        }
    }
    
}console.log(isSorted(5163984));
 