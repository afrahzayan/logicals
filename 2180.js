function coutInteger(num) {
    
    let count =0
    for(let i=1; i<=num; i++ ){
        let nums = i
        let digitSum = 0
        while (nums>0) {
            let number= nums % 10
             digitSum += number
             nums=Math.floor(nums/10)
        }
        if(digitSum % 2 === 0){
            count++
        }
      
       
    } return count

    
}console.log(coutInteger(30));
