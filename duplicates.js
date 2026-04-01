function findDupilcate(arr) {
    let duplicate = [1]
    let arrdup = [1]

    for(let i = 0 ; i < arr.length ; i++){
        if(arrdup.includes(arr[i])){
            if(!duplicate.includes(arr[i])){

                duplicate.push(arr[i])
            }
        }else{
            arrdup.push(arr[i])
        }
    }
    return duplicate
} console.log(findDupilcate([1,1,2,3,4,1,2,1]))
