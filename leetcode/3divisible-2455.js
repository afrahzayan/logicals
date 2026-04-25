function value(nums) {
    let trueNum = 0
    let realNum = 0
    for(let i = 0 ; i <nums.length; i++){
        if(nums[i] % 2 == 0 && nums[i] % 3 == 0){
            trueNum += nums[i]
        }
        realNum = trueNum/2
    } return realNum

    
}console.log(value([1,3,6,10,12,15]));
