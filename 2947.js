function number(nums) {
    let sort = 0
    let pairs = []

    sort = nums.sort((a,b) => a-b)
      for(let i = 0 ; i< nums.length ; i+=2){
        pairs.push(nums[i+1])
        pairs.push(nums[i])

      }

    return pairs
    
}
console.log(number([5,4,2,3]));
