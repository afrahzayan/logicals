function findSmallest(arr) {
    let smallest = arr[0]

    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < smallest){
            smallest = arr[i]
        }

    }return smallest
    
}console.log(findSmallest([4,6,8,3,1,2,90,56]));
