function GCD(nums) {
    let smallest = nums[0]
    let largest = 0
    let divisor = 1

    for(let i = 0 ; i< nums.length ; i++){
        if(nums[i] < smallest){
            smallest = nums[i]
        }
        if(nums[i] > largest){
            largest = nums[i]
        }
    } 

    for(let i = 1 ; i<= smallest ; i++){
        if(largest % i === 0 && smallest % i === 0){
             divisor = i
        } 
    } return divisor
    
}console.log(GCD([3,3]));
