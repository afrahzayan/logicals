function findLargest(arr){
    let largest= arr[0]

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > largest ){
        largest = arr[i]
            
        }
    } return largest
    

}console.log(findLargest([61,2,3,4,500,1]));
