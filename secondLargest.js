function SecondLargest(arr) {

    let largest = arr[0]
    let SecondLargest = arr[0]
    
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > largest){
            SecondLargest=largest
            largest = arr[i]
        }else if (arr[i] > SecondLargest && arr[i] != largest){

        }
    } return SecondLargest
    


}console.log(SecondLargest([1,2,3,4,5,6,7]));
